import { useIonRouter } from '@ionic/react'
import { useAuth } from '../../lib/context/AuthContext'
import { Redirect } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { authState } = useAuth()
    const navigation= useIonRouter()
    // navigation.push('/auth/login', 'forward')
    return (
        <>
            {!authState?.isAuthenticated ? <Redirect to='/auth/login'/> : children }
        </>
    )
}

export default ProtectedRoute