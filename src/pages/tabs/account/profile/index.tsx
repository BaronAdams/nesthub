import { useAuth } from '@/lib/context/AuthContext'
import { IonAvatar, IonContent, IonIcon, IonPage } from '@ionic/react'
import { mailOutline, person, personOutline, camera } from 'ionicons/icons'
import { useState } from 'react'

const Profile = () => {
    const { authState } = useAuth()

    return (
        <IonPage style={{ overflow: 'hidden' }}>
            <IonContent fullscreen >
                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="grid grid-cols-1">
                            <div className="profile-banner relative text-transparent rounded-md shadow dark:shadow-gray-700 overflow-hidden">
                                <input id="pro-banner" name="profile-banner" type="file" className="hidden" />
                                <div className="relative shrink-0">
                                    <img src="/images/bg.jpg" className="h-80 w-full object-cover" id="profile-banner" alt="" />
                                    <div className="absolute inset-0 bg-black/70"></div>
                                    <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-12 grid-cols-1">
                            <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-3">
                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 -mt-48">
                                    <div className="profile-pic text-center mb-5">
                                        <input id="pro-img" name="profile-image" type="file" className="hidden" />
                                        <div>
                                            <div className="relative size-24 mx-auto">
                                                {/* <img src="/images/users/neil-sims.png" className="rounded-full shadow dark:shadow-gray-700 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" /> */}
                                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                                {authState?.user?.profilePic ?
                                                    <img src={authState.user?.profilePic} className="rounded-full shadow dark:shadow-gray-700 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="Profile picture" />
                                                    : authState?.user?.firstName && (
                                                        <IonAvatar className='size-24'>
                                                            <div style={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: authState?.user?.color }} className={`size-full rounded-full text-[68px] text-center text-white pt-1`}>
                                                                {authState.user?.firstName[0].toUpperCase()}
                                                            </div>
                                                        </IonAvatar>
                                                    )
                                                }
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="text-lg font-semibold">{authState?.user?.firstName + " " +authState?.user?.lastName}</h5>
                                                <p className="text-slate-400">{authState?.user?.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 dark:border-gray-700">
                                        <h5 className="text-xl font-semibold mt-4">Informations personnelles :</h5>
                                        <div className="mt-4">
                                            <div className="flex items-center">
                                                <i data-feather="mail" className="fea icon-ex-md text-slate-400 me-3"></i>
                                                <div className="flex-1">
                                                    <h6 className="text-blue-500 dark:text-white font-medium mb-0">Email :</h6>
                                                    <a href="#" className="text-slate-400">{authState?.user?.email}</a>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-3">
                                                <i data-feather="bookmark" className="fea icon-ex-md text-slate-400 me-3"></i>
                                                <div className="flex-1">
                                                    <h6 className="text-blue-500 dark:text-white font-medium mb-0">Skills :</h6>
                                                    <a href="#" className="text-slate-400">html</a>, <a href="#" className="text-slate-400">css</a>, <a href="#" className="text-slate-400">js</a>, <a href="#" className="text-slate-400">mysql</a>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-3">
                                                <i data-feather="italic" className="fea icon-ex-md text-slate-400 me-3"></i>
                                                <div className="flex-1">
                                                    <h6 className="text-blue-500 dark:text-white font-medium mb-0">Language :</h6>
                                                    <a href="#" className="text-slate-400">English</a>, <a href="#" className="text-slate-400">Japanese</a>, <a href="#" className="text-slate-400">Chinese</a>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-3">
                                                <i data-feather="globe" className="fea icon-ex-md text-slate-400 me-3"></i>
                                                <div className="flex-1">
                                                    <h6 className="text-blue-500 dark:text-white font-medium mb-0">Website :</h6>
                                                    <a href="#" className="text-slate-400">www.cristina.com</a>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-3">
                                                <i data-feather="gift" className="fea icon-ex-md text-slate-400 me-3"></i>
                                                <div className="flex-1">
                                                    <h6 className="text-blue-500 dark:text-white font-medium mb-0">Birthday :</h6>
                                                    <p className="text-slate-400 mb-0">2nd March, 1996</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-3">
                                                <i data-feather="map-pin" className="fea icon-ex-md text-slate-400 me-3"></i>
                                                <div className="flex-1">
                                                    <h6 className="text-blue-500 dark:text-white font-medium mb-0">Location :</h6>
                                                    <a href="#" className="text-slate-400">Beijing, China</a>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-3">
                                                <i data-feather="phone" className="fea icon-ex-md text-slate-400 me-3"></i>
                                                <div className="flex-1">
                                                    <h6 className="text-blue-500 dark:text-white font-medium mb-0">Cell No :</h6>
                                                    <a href="#" className="text-slate-400">(+12) 1254-56-4896</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 mt-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <h5 className="text-xl font-semibold">Calvin Carlo</h5>

                                        <p className="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Profile