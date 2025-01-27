import React, { createContext, useState, useContext, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { ErrorAuthFields } from '../types';
import { loginCredentialsSchema, registerCredentialsSchema } from '../validators/zod-schemas';
import { z } from "zod"
import { io } from "socket.io-client";
import { API_URL } from '../constants';

let socketUrl = process.env.NODE_ENV == "production" ? process.env.API_URL : 'http://localhost:7000'
// const socket = io(socketUrl);

export const setToken = async (authTokenSession: { accessToken: string, expiresAt: string }) => {
    await SecureStoragePlugin.set({
        key: 'authToken',
        value: JSON.stringify(authTokenSession),
    });
};

export const getToken = async () => {
    try {
        const { value } = await SecureStoragePlugin.get({ key: 'authToken' });
        if (value) return JSON.parse(value)
    } catch (error) {
        return null
    }
};

const removeToken = async () => {
    // Capacitor.isNativePlatform()
    await SecureStoragePlugin.remove({ key: 'authToken' });
};

interface registerBody {
    email: string | null,
    password: string | null,
    firstName: string | null,
    lastName: string | null,
    phone: string | null,
    location: string | null
}

interface loginBody {
    email: string | null,
    password: string | null
}

interface AuthProps {
    authState: { user: null | any, isAuthenticated: boolean },
    register: (credentials: registerBody) => Promise<any>,
    login: (credentials: loginBody) => Promise<any>,
    logout: () => Promise<any>,
    loading?: boolean,
    error?:boolean
}

// @ts-ignore
const AuthContext = createContext<AuthProps>()

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [authState, setAuthState] = useState({ user: null, isAuthenticated: false });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            try {
                const authTokenSession = await getToken();
                const token = authTokenSession?.accessToken
                if (token) {
                    await getUserData(token); // Récupérez les informations utilisateur si le token existe
                }
            } catch (e) {
                setError(true)
                console.log(e)
            }finally{
                setLoading(false)
            }
        }
        fetchUser()
    }, []);

    const login = async (credentials: loginBody) => {
        let error: ErrorAuthFields = {};

        try {
            loginCredentialsSchema.parse(credentials);
        } catch (err) {
            if (err instanceof z.ZodError) {
                for (let iss of err.issues) {
                    error = { ...error, [iss.path[0]]: iss.message }
                }
                return error
            }
        }

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            let res = await response.json()
            if (res?.success) {
                const { success, ...others } = res; // Récupérez le token
                await setToken(others); // Stockez le token
                await getUserData(others?.accessToken); // Récupérez les informations de l'utilisateur
                return res
            } else {
                if (res.message) error = { ...error, message: res.message }
                if (res.errors) error = { ...error, ...res.errors }
                return error
            }
        } catch (err) {
            return { message: "Une erreur est survenue! Veuillez réessayer" };
        } 
        // finally {
        //     console.log(hasSuccessfullyLogged)
        //     if (hasSuccessfullyLogged) navigation.push('/', 'forward')
        // }
    };

    const register = async (credentials: registerBody) => {
        let error: ErrorAuthFields = {};
        try {
            registerCredentialsSchema.parse(credentials);
        } catch (err) {
            if (err instanceof z.ZodError) {
                for (let iss of err.issues) {
                    error = { ...error, [iss.path[0]]: iss.message }
                }
                return error
            }
        }

        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });
            let res = await response.json()
            if (res?.success) {
                let loginResponse = await login({ email: credentials.email, password: credentials.password });
                return loginResponse
            } else {
                if (res.message) error = { ...error, message: res.message }
                if (res.errors) error = { ...error, ...res.errors }
                return error
            }
        } catch (err) {
            return { message: "Une erreur est survenue! Veuillez réessayer" };
        }
    };

    const getUserData = async (token: string) => {
        try {
            const response = await fetch(`${API_URL}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            let res = await response.json()
            
            if (res.success) {
                setAuthState({
                    user: res.user,
                    isAuthenticated: true
                });
                if (res.accessToken) {
                    const { success, user, ...others } = res
                    setToken(others)
                }
            } else {
                throw new Error(res.data.message || 'Échec de la récupération des informations utilisateur');
            }
        } catch (err) {
            console.log("Une erreur est survenue");
            // logout(); // Déconnexion si l'appel échoue
        }
    };

    const logout = async () => {
        await removeToken(); // Supprimez le token du stockage
        setAuthState({ user: null, isAuthenticated: false });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout, register, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
