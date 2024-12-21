import PhoneInput from '@/components/partials/phone-input'
import { ThreeCirclesWithArcs } from '@/components/icons'
import { useAuth } from '@/lib/context/AuthContext'
import { IonContent, IonIcon, IonPage, IonSpinner, useIonRouter } from '@ionic/react'
import { eyeOffOutline, eyeOutline } from 'ionicons/icons'
import { useState, useTransition } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './style.css'

const Register = () => {
    const navigation = useIonRouter()
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<any>(undefined)
    const [displayPwd, setDisplayPwd] = useState<boolean>(false)
    const { register } = useAuth()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setError(undefined)
        e.preventDefault()
        let formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get('RegisterEmail') ? String(formData.get('RegisterEmail')) : null
        const password = formData.get('RegisterPassword') ? String(formData.get('RegisterPassword')) : null
        const firstName = formData.get('RegisterFirstName') ? String(formData.get('RegisterFirstName')) : null
        const lastName = formData.get('RegisterLastName') ? String(formData.get('RegisterLastName')) : null
        const location = formData.get('RegisterLocations') ? String(formData.get('RegisterLocations')) : null
        const phone = formData.get('RegisterPhone') ? String(formData.get('RegisterPhone')) : null
        const isChecked = formData.get("AcceptT&C");

        if(isChecked === "yes"){
            // @ts-ignore
            startTransition(async () => {
                let err = await register({ email, password, firstName, lastName, location, phone })
                if (err) {
                    setError(err);
                    return;
                }
            })
        }else{
            setError({termsAndConditions:"Veuillez accepter les termes et conditions pour continuer"})
        }
    }
    return (
        <IonPage style={{ overflow: 'hidden' }}>
            <IonContent fullscreen>
            <Swiper 
                slidesPerView={1}
                modules={[Navigation]}
                navigation
            >
                <SwiperSlide className='w-screen flex justify-center pt-12 dark:bg-[#1c1c1d]'>
                    <div className="max-w-[400px] w-full m-auto px-6 bg-white dark:bg-[#1c1c1d] rounded-md">
                        <ThreeCirclesWithArcs size={40} />
                        <a href="#">{/* <img src="assets/images/logo-dark.png" className="mx-auto block dark:hidden" alt="" /><img src="assets/images/logo-light.png" className="mx-auto dark:block hidden" alt="" /> */}Logo</a>
                        <h5 className="my-6 text-xl font-semibold">Inscription</h5>
                        <form onSubmit={handleSubmit} className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterFirstName">Votre prénom:</label>
                                    <input name='RegisterFirstName' id="RegisterFirstName" type="text" className="form-input mt-2 bg-transparent" placeholder="Harry" />
                                    {error?.firstName && (<div className='text-red-500 mt-[5px]'> {error.firstName} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterLastName">Votre nom:</label>
                                    <input name='RegisterLastName' id="RegisterLastName" type="text" className="form-input mt-2 bg-transparent" placeholder="Jefferson" />
                                    {error?.lastName && (<div className='text-red-500 mt-[5px]'> {error.lastName} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterEmail">Addresse Email:</label>
                                    <input name='RegisterEmail' id="RegisterEmail" type="email" className="form-input mt-2 bg-transparent" placeholder="name@example.com" />
                                    {error?.email && (<div className='text-red-500 mt-[5px]'> {error.email} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterPassword">Mot de passe:</label>
                                    <div className='flex relative'>
                                        <input name='RegisterPassword' id="RegisterPassword" type={ displayPwd ? "text" : "password" } className="form-input mt-2 inline bg-transparent" placeholder="Password:" />
                                        { displayPwd ? <IonIcon onClick={() => setDisplayPwd((val) => !val) } className='text-[20px] absolute top-1/2 right-[5%] translate-y-[-15%]' icon={eyeOffOutline} /> : <IonIcon onClick={() => setDisplayPwd((val) => !val)} className='text-[20px] absolute top-1/2 right-[5%] translate-y-[-15%]' icon={eyeOutline} />}
                                    </div>
                                    {error?.password && (<div className='text-red-500 mt-[5px]'> {error.password} </div>)}
                                </div>

                                <div className="mb-4">
                                    <PhoneInput name='RegisterPhone' id='RegisterPhone'/>
                                    {error?.phone && (<div className='text-red-500 mt-[5px]'> {error.phone} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="location">Votre ville de résidence:</label>
                                    <select 
                                        name="RegisterLocations" 
                                        id="RegisterLocations"
                                        className='form-input dark:bg-[#1c1c1d]'
                                    >
                                        <option value="Bafoussam">Bafoussam</option>
                                        <option value="Bamenda">Bamenda</option>
                                        <option value="Bertoua">Bertoua</option>
                                        <option value="Buéa">Buéa</option>
                                        <option value="Douala">Douala</option>
                                        <option value="Ebolowa">Ebolowa</option>
                                        <option value="Garoua">Garoua</option>
                                        <option value="Maroua">Maroua</option>
                                        <option value="Ngaoundéré">Ngaoundéré</option>
                                        <option value="Yaoundé">Yaoundé</option>
                                    </select>
                                    {error?.location && (<div className='text-red-500 mt-[5px]'> {error.location} </div>)}
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center mb-0">
                                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-blue-500 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50 me-2" type="checkbox" value="yes" name="AcceptT&C" id="AcceptT&C" />
                                        <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">J'accepte <span className="text-blue-500 hover:underline ">les termes et les conditions</span></label>
                                    </div>
                                    {error?.termsAndConditions && (<div className='text-red-500 mt-[5px]'> {error.termsAndConditions} </div>)}
                                    {error?.message && (<div className='text-red-500 mt-[5px]'> {error.message} </div>)}
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
                </SwiperSlide>
                <SwiperSlide className='w-screen flex justify-center pt-12 dark:bg-[#1c1c1d]'>
                    <div className="max-w-[400px] w-full m-auto px-6 bg-white dark:bg-[#1c1c1d] rounded-md">
                        <ThreeCirclesWithArcs size={40} />
                        <a href="#">{/* <img src="assets/images/logo-dark.png" className="mx-auto block dark:hidden" alt="" /><img src="assets/images/logo-light.png" className="mx-auto dark:block hidden" alt="" /> */}Logo</a>
                        <h5 className="my-6 text-xl font-semibold">Inscription</h5>
                        <form onSubmit={handleSubmit} className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterFirstName">Votre prénom:</label>
                                    <input name='RegisterFirstName' id="RegisterFirstName" type="text" className="form-input mt-2 bg-transparent" placeholder="Harry" />
                                    {error?.firstName && (<div className='text-red-500 mt-[5px]'> {error.firstName} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterLastName">Votre nom:</label>
                                    <input name='RegisterLastName' id="RegisterLastName" type="text" className="form-input mt-2 bg-transparent" placeholder="Jefferson" />
                                    {error?.lastName && (<div className='text-red-500 mt-[5px]'> {error.lastName} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterEmail">Addresse Email:</label>
                                    <input name='RegisterEmail' id="RegisterEmail" type="email" className="form-input mt-2 bg-transparent" placeholder="name@example.com" />
                                    {error?.email && (<div className='text-red-500 mt-[5px]'> {error.email} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="RegisterPassword">Mot de passe:</label>
                                    <div className='flex relative'>
                                        <input name='RegisterPassword' id="RegisterPassword" type={ displayPwd ? "text" : "password" } className="form-input mt-2 inline bg-transparent" placeholder="Password:" />
                                        { displayPwd ? <IonIcon onClick={() => setDisplayPwd((val) => !val) } className='text-[20px] absolute top-1/2 right-[5%] translate-y-[-15%]' icon={eyeOffOutline} /> : <IonIcon onClick={() => setDisplayPwd((val) => !val)} className='text-[20px] absolute top-1/2 right-[5%] translate-y-[-15%]' icon={eyeOutline} />}
                                    </div>
                                    {error?.password && (<div className='text-red-500 mt-[5px]'> {error.password} </div>)}
                                </div>

                                <div className="mb-4">
                                    <PhoneInput name='RegisterPhone' id='RegisterPhone'/>
                                    {error?.phone && (<div className='text-red-500 mt-[5px]'> {error.phone} </div>)}
                                </div>

                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="location">Votre ville de résidence:</label>
                                    <select 
                                        name="RegisterLocations" 
                                        id="RegisterLocations"
                                        className='form-input dark:bg-[#1c1c1d]'
                                    >
                                        <option value="Bafoussam">Bafoussam</option>
                                        <option value="Bamenda">Bamenda</option>
                                        <option value="Bertoua">Bertoua</option>
                                        <option value="Buéa">Buéa</option>
                                        <option value="Douala">Douala</option>
                                        <option value="Ebolowa">Ebolowa</option>
                                        <option value="Garoua">Garoua</option>
                                        <option value="Maroua">Maroua</option>
                                        <option value="Ngaoundéré">Ngaoundéré</option>
                                        <option value="Yaoundé">Yaoundé</option>
                                    </select>
                                    {error?.location && (<div className='text-red-500 mt-[5px]'> {error.location} </div>)}
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center mb-0">
                                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-blue-500 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50 me-2" type="checkbox" value="yes" name="AcceptT&C" id="AcceptT&C" />
                                        <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">J'accepte <span className="text-blue-500 hover:underline ">les termes et les conditions</span></label>
                                    </div>
                                    {error?.termsAndConditions && (<div className='text-red-500 mt-[5px]'> {error.termsAndConditions} </div>)}
                                    {error?.message && (<div className='text-red-500 mt-[5px]'> {error.message} </div>)}
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
                </SwiperSlide>
            </Swiper>
            </IonContent>
        </IonPage>
    )
}

export default Register