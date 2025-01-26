import PhoneInput from '@/components/partials/phone-input'
import Select from 'react-select';
import { ThreeCirclesWithArcs } from '@/components/icons'
import { getToken, useAuth } from '@/lib/context/AuthContext'
import { IonContent, IonIcon, IonPage, IonSpinner, useIonRouter } from '@ionic/react'
import { eyeOffOutline, eyeOutline } from 'ionicons/icons'
import { useEffect, useState, useTransition } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './style.css'
import { cityTags, hoodTags, propertyTypesTags } from '@/data'
import { API_URL } from '@/lib/constants';

const Register = () => {
    const navigation = useIonRouter()
    const [isPendingRegistration, startRegistrationTransition] = useTransition()
    const [isPendingSavePreferences, startSavePreferencesTransition] = useTransition()
    const [registrationError, setRegistrationError] = useState<{
        firstName?: string,
        lastName?: string,
        message?: string,
        email?: string,
        password?: string,
        phone?: string,
        location?: string,
        termsAndConditions?: string
    }>({})
    const [preferencesError, setPreferencesError] = useState<{
        property_type?: string,
        city?: string,
        hood?: string,
        message?: string
    }>({})
    const [displayPwd, setDisplayPwd] = useState<boolean>(false)
    const [selectedTags, setSelectedTags] = useState<{
        actionType: "prefer",
        property_type?: string[],
        city?: string[],
        hood?: string[]
    }>({
        actionType: "prefer"
    })
    const { register } = useAuth()

    useEffect(() => {
      console.log(selectedTags)
    }, [selectedTags])
    
    const togglePropertyTypeTag = (tag: string) => {
        setSelectedTags((prevSelected) => {
            let propertyTypesArr = prevSelected.property_type ? prevSelected.property_type : []
            if (propertyTypesArr.includes(tag)) {
                return { ...prevSelected, property_type: propertyTypesArr.filter((t) => t !== tag) }
            } else {
                return { ...prevSelected, property_type: [...propertyTypesArr, tag] }
            }
        })
    }

    const toggleCityTag = (tag: string) => {
        setSelectedTags((prevSelected) => {
            let citiesArr = prevSelected.city ? prevSelected.city : []
            if (citiesArr.includes(tag)) {
                return { ...prevSelected, city: citiesArr.filter((t) => t !== tag) }
            } else {
                return { ...prevSelected, city: [...citiesArr, tag] }
            }
        })
    }

    const toggleHoodTag = (tags: { label:string, value:string }[]) => {
        setSelectedTags((prevSelected) => {
            let hoodsArr = tags.map((el)=>el.value)
            return { ...prevSelected, hood: hoodsArr }
        })
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        setRegistrationError({})
        e.preventDefault()
        let formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get('RegisterEmail') ? String(formData.get('RegisterEmail')) : null
        const password = formData.get('RegisterPassword') ? String(formData.get('RegisterPassword')) : null
        const firstName = formData.get('RegisterFirstName') ? String(formData.get('RegisterFirstName')) : null
        const lastName = formData.get('RegisterLastName') ? String(formData.get('RegisterLastName')) : null
        const location = formData.get('RegisterLocations') ? String(formData.get('RegisterLocations')) : null
        const phone = formData.get('RegisterPhone') ? String(formData.get('RegisterPhone')) : null
        const isChecked = formData.get("AcceptT&C");

        if (isChecked === "yes") {
            // @ts-ignore
            startRegistrationTransition(async () => {
                let res = await register({ email, password, firstName, lastName, location, phone })
                if (res?.success) {
                    // @ts-ignore
                    document.querySelector('.swiper-button-next')?.click();
                } else {
                    if (res.message) setRegistrationError((err) => ({ message: res.message, ...err }))
                    if (res.errors) setRegistrationError((err) => ({ ...err, ...res.errors }))
                }
            })
        } else {
            setRegistrationError({ termsAndConditions: "Veuillez accepter les termes et conditions pour continuer" })
        }
    }

    const handleSavePreferences = async () =>{
        setPreferencesError({})
        if(!selectedTags.property_type?.length) {
            setPreferencesError((err)=>({...err, property_type:"Vous devez côcher au moins une propriété"}))
            return ;
        }
        if(!selectedTags.city?.length){
            setPreferencesError((err)=>({...err, city:"Vous devez côcher au moins une ville"}))
            return ;
        }
        if(!selectedTags.hood?.length){
            setPreferencesError((err)=>({...err, hood:"Vous devez selectionnner au moins une quartier de préférence"}))
            return ;
        }

        let { accessToken } = await getToken()
        // @ts-ignore
        startSavePreferencesTransition(async () => {
            try {
                const response = await fetch(`${API_URL}/auth/me/edit`, {
                    method: 'PUT',
                    body: JSON.stringify({ scores: selectedTags }),
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                let res = await response.json()
                if(res.success) {
                    navigation.push("/","forward")
                }else{
                    setPreferencesError((err) => ({ message: res.message, ...err }))
                    return;
                }
            } catch (error) {
                setPreferencesError((err)=>({...err, message:"Une erreur est survenue"}));
                return;
            }
        }) 
        
    }
    return (
        <IonPage style={{ overflow: 'hidden' }}>
            <IonContent fullscreen>
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
                >
                    <SwiperSlide className='w-screen swiper-no-swiping flex justify-center py-12 dark:bg-[#1c1c1d]'>
                        <div className="max-w-[400px] w-full m-auto px-6 bg-white dark:bg-[#1c1c1d] rounded-md">
                            <ThreeCirclesWithArcs size={40} />
                            <a href="#">{/* <img src="assets/images/logo-dark.png" className="mx-auto block dark:hidden" alt="" /><img src="assets/images/logo-light.png" className="mx-auto dark:block hidden" alt="" /> */}Logo</a>
                            <h5 className="my-6 text-xl font-semibold">Inscription</h5>
                            <form onSubmit={handleRegister} className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="RegisterFirstName">Votre prénom:</label>
                                        <input name='RegisterFirstName' id="RegisterFirstName" type="text" className="form-input mt-2 bg-transparent" placeholder="Harry" />
                                        {registrationError?.firstName && (<div className='text-red-500 mt-[5px]'> {registrationError.firstName} </div>)}
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="RegisterLastName">Votre nom:</label>
                                        <input name='RegisterLastName' id="RegisterLastName" type="text" className="form-input mt-2 bg-transparent" placeholder="Jefferson" />
                                        {registrationError?.lastName && (<div className='text-red-500 mt-[5px]'> {registrationError.lastName} </div>)}
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="RegisterEmail">Addresse Email:</label>
                                        <input name='RegisterEmail' id="RegisterEmail" type="email" className="form-input mt-2 bg-transparent" placeholder="name@example.com" />
                                        {registrationError?.email && (<div className='text-red-500 mt-[5px]'> {registrationError.email} </div>)}
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="RegisterPassword">Mot de passe:</label>
                                        <div className='flex relative'>
                                            <input name='RegisterPassword' id="RegisterPassword" type={displayPwd ? "text" : "password"} className="form-input mt-2 inline bg-transparent" placeholder="Password:" />
                                            {displayPwd ? <IonIcon onClick={() => setDisplayPwd((val) => !val)} className='text-[20px] absolute top-1/2 right-[5%] translate-y-[-28%]' icon={eyeOffOutline} /> : <IonIcon onClick={() => setDisplayPwd((val) => !val)} className='text-[20px] absolute top-1/2 right-[5%] translate-y-[-28%]' icon={eyeOutline} />}
                                        </div>
                                        {registrationError?.password && (<div className='text-red-500 mt-[5px]'> {registrationError.password} </div>)}
                                    </div>

                                    <div className="mb-4">
                                        <PhoneInput name='RegisterPhone' id='RegisterPhone' />
                                        {registrationError?.phone && (<div className='text-red-500 mt-[5px]'> {registrationError.phone} </div>)}
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
                                        {registrationError?.location && (<div className='text-red-500 mt-[5px]'> {registrationError.location} </div>)}
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-blue-500 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50 me-2" type="checkbox" value="yes" name="AcceptT&C" id="AcceptT&C" />
                                            <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">J'accepte <span className="text-blue-500 hover:underline ">les termes et les conditions</span></label>
                                        </div>
                                        {registrationError?.termsAndConditions && (<div className='text-red-500 mt-[5px]'> {registrationError.termsAndConditions} </div>)}
                                        {registrationError?.message && (<div className='text-red-500 mt-[5px]'> {registrationError.message} </div>)}
                                    </div>

                                    <div className="mb-4">
                                        <button type='submit' disabled={isPendingRegistration} className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full">
                                            {isPendingRegistration && <IonSpinner color='light' className='mr-2'></IonSpinner>} Inscrivez-vous
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">Vous avez déja un compte ? </span> <span onClick={() => navigation.push('/auth/login', 'forward')} className="text-black hover:cursor-pointer dark:text-white hover:text-blue-500 hover:underline font-medium">Se connecter</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-screen swiper-no-swiping next flex justify-center pt-12 dark:bg-[#1c1c1d]'>
                        <div className="max-w-[400px] max-h-screen w-full m-auto px-6 bg-white dark:bg-[#1c1c1d] rounded-md">
                            <h3 className="font-semibold text-[21.46px] mb-3">
                                Préférences
                            </h3>
                            <p className="font-medium my-2">Quelles propriétés vous préférez ??</p>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {propertyTypesTags.map((tag, index) => (
                                    <div 
                                    onClick={()=> togglePropertyTypeTag(tag)}
                                    key={tag + "-" + index} 
                                    className={`relative overflow-hidden p-2 transition-all duration-1000 ease-in-out text-sm rounded bg-blue-600/10  `}>
                                        <span className={`absolute z-10 inset-0 bg-blue-600 transform transition-transform duration-500 ease-in-out ${selectedTags.property_type?.includes(tag) ? 'translate-y-0' : 'translate-y-full'} `}>
                                        </span>
                                        <span className={`relative z-20 ${selectedTags.property_type?.includes(tag) ? 'text-white ' : 'text-blue-600'}`}>
                                            {tag}
                                        </span>
                                        {/* {tag} */}
                                    </div>
                                ))}
                            </div>
                            <p className="font-medium my-2">Dans quelles villes vous aimerez trouver des propriétés ??</p>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {cityTags.map((tag, index) => (
                                    <div 
                                    key={tag + "-" + index} 
                                    onClick={()=>toggleCityTag(tag)}
                                    className={`relative overflow-hidden p-2  transition-all duration-1000 ease-in-out text-sm rounded bg-blue-600/10 `}>
                                        <span className={`absolute inset-0 z-10 bg-blue-600 rounded transform transition-transform duration-500 ease-in-out ${selectedTags.city?.includes(tag) ? 'translate-y-0' : 'translate-y-full'} `}>
                                        </span>
                                        <span className={`relative z-20 ${selectedTags.city?.includes(tag) ? 'text-white' : 'text-blue-600'}`}>
                                            {tag}
                                        </span>
                                        {/* {tag} */}
                                    </div>
                                ))}
                            </div>
                            <p className="font-medium my-2">Dans quels quartiers vous aimerez trouver des propriétés ??</p>
                            <Select
                                isMulti
                                onChange={(value)=> {
                                    // @ts-ignore
                                    toggleHoodTag(value)
                                }}
                                name="hoods"
                                options={hoodTags}
                                className='basic-multi-select w-[93vw] py-1 mb-7 rounded-md outline-none text-base-content placeholder:text-base bg-base-100 focus:border-black'
                                classNamePrefix="select"
                            />
                            <button 
                                disabled={isPendingSavePreferences} 
                                onClick={()=>handleSavePreferences()} 
                                className="mb-7 btn bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full"
                            >
                                {isPendingSavePreferences && <IonSpinner color='light' className='mr-2'></IonSpinner>} Envoyez
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonPage>
    )
}

export default Register