import { useAuth } from '@/lib/context/AuthContext'
import { IonContent, IonPage, IonSpinner, useIonRouter } from '@ionic/react'
import { useState, useTransition } from 'react'

const Login = () => {
    const navigation = useIonRouter()
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<any>(undefined)
    const { login } = useAuth()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get('LoginEmail') ? String(formData.get('LoginEmail')) : null
        const password = formData.get('LoginPassword') ? String(formData.get('LoginPassword')) : null
        // @ts-ignore
        startTransition(async () => {
            let res = await login({ email, password })
            if(res.success){
                navigation.push('/', 'forward')
            }
            else{
                setError(res);
                return;
            }
        })
    }
    return (
        <IonPage style={{ overflow: 'hidden' }}>
            <IonContent fullscreen >
                <div className='w-screen flex justify-center pt-12 dark:bg-[#1c1c1d]'>
                    <div className="max-w-[400px] w-full m-auto px-6 bg-white dark:bg-[#1c1c1d] rounded-md">
                        <a href="index.html">Logo{/*<img src="assets/images/logo-icon-64.png" className="mx-auto" alt=""/>*/}</a>
                        <h5 className="my-6 text-xl font-semibold">Connexion</h5>
                        <form onSubmit={handleSubmit} className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label htmlFor="LoginEmail" className="font-medium">Votre adresse email</label>
                                    <input name='LoginEmail' id="LoginEmail" type="email" className="form-input mt-2" placeholder="name@example.com" />
                                    {error?.email && (<div className='text-red-500 mt-[5px]'> {error.email} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="LoginPassword" className="font-medium">Mot de passe</label>
                                    <input name='LoginPassword' id="LoginPassword" type="password" className="form-input mt-2" placeholder="Password:" />
                                    {error?.password && (<div className='text-red-500 mt-[5px]'> {error.password} </div>)}
                                    {error?.message && (<div className='text-red-500 mt-[5px]'> {error.message} </div>)}
                                </div>

                                <div className="flex justify-between mb-4">
                                    {/* <div className="flex items-center mb-0">
                                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-blue-500 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe" />
                                        <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Se souvenir de moi</label>
                                    </div> */}
                                    <p className="text-slate-400 mb-0"><a href="auth-re-password.html" className="text-slate-400 hover:text-blue-500">Mot de passe oublié ?</a></p>
                                </div>

                                <div className="mb-4">
                                    <button type='submit' disabled={isPending} className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full">
                                        {isPending && <IonSpinner color='light' className='mr-2'></IonSpinner>}  Connectez-vous
                                    </button>
                                </div>
                                <div className="text-center">
                                    <span className="text-slate-400 me-2">Vous n'avez pas de compte ?</span> <span onClick={() => navigation.push('/auth/register', 'forward')} className="text-black dark:text-white font-medium hover:text-blue-500 hover:cursor-pointer hover:underline ">S'inscrire</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Login