import { useAuth } from '@/lib/context/AuthContext'
import { IonContent, IonIcon, IonPage, IonSpinner, useIonRouter } from '@ionic/react'
import { eyeOffOutline, eyeOutline } from 'ionicons/icons'
import { useState, useTransition } from 'react'

const Register = () => {
    const navigation = useIonRouter()
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<any>(undefined)
    const [displayPwd, setDisplayPwd] = useState<boolean>(false)
    const { register } = useAuth()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get('RegisterEmail') as string
        const password = formData.get('RegisterPassword') as string
        const firstName = formData.get('RegisterFirstName') as string
        const lastName = formData.get('RegisterLastName') as string
        // @ts-ignore
        startTransition(async () => {
            let err = await register({ email, password, firstName, lastName })
            if (err) {
                setError(err);
                return;
            }
        })
    }
    return (
        <IonPage style={{ overflow: 'hidden' }}>
            <IonContent fullscreen>
                <div className='w-screen flex justify-center pt-12 dark:bg-[#1c1c1d]'>
                    <div className="max-w-[400px] w-full m-auto px-6 bg-white dark:bg-[#1c1c1d] rounded-md">
                        <a href="#">{/* <img src="assets/images/logo-dark.png" className="mx-auto block dark:hidden" alt="" /><img src="assets/images/logo-light.png" className="mx-auto dark:block hidden" alt="" /> */}Logo</a>
                        <h5 className="my-6 text-xl font-semibold">Inscription</h5>
                        <form onSubmit={handleSubmit} className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterFirstName">Votre prénom:</label>
                                    <input name='RegisterFirstName' id="RegisterFirstName" type="text" className="form-input mt-3" placeholder="Harry" />
                                    {error?.firstName && (<span className='text-red-500 mt-2'> {error.firstName} </span>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterLastName">Votre nom:</label>
                                    <input name='RegisterLastName' id="RegisterLastName" type="text" className="form-input mt-3" placeholder="Jefferson" />
                                    {error?.lastName && (<span className='text-red-500 mt-2'> {error.lastName} </span>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterEmail">Addresse Email:</label>
                                    <input name='RegisterEmail' id="RegisterEmail" type="email" className="form-input mt-3" placeholder="name@example.com" />
                                    {error?.email && (<span className='text-red-500 mt-2'> {error.email} </span>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterPassword">Mot de passe:</label>
                                    <div className='flex relative'>
                                        <input name='RegisterPassword' id="RegisterPassword" type={ displayPwd ? "text" : "password" } className="form-input mt-3 inline" placeholder="Password:" />
                                        { displayPwd ? <IonIcon onClick={() => setDisplayPwd((val) => !val) } className='text-[20px] absolute top-1/2 right-[5%] translate-y-[-15%]' icon={eyeOffOutline} /> : <IonIcon onClick={() => setDisplayPwd((val) => !val)} className='text-[20px] absolute top-1/2 right-[5%] translate-y-[-15%]' icon={eyeOutline} />}
                                    </div>
                                    {error?.password && (<span className='text-red-500 mt-2'> {error.password} </span>)}
                                    {error?.message && (<span className='text-red-500 mt-4'> {error.message} </span>)}
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center mb-0">
                                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-blue-500 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C" />
                                        <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">J'accepte <span className="text-blue-500 hover:underline ">les termes et les conditions</span></label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <button type='submit' disabled={isPending} className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full">
                                        {isPending && <IonSpinner color='light' className='mr-2'></IonSpinner>} Inscrivez-vous
                                    </button>
                                </div>

                                <div className="text-center">
                                    <span className="text-slate-400 me-2">Vous avez déja un compte ? </span> <span onClick={() => navigation.push('/auth/login', 'forward')} className="text-black hover:cursor-pointer dark:text-white hover:text-blue-500 hover:underline font-medium">Se connecter</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Register