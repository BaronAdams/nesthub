import { useAuth } from '@/lib/context/AuthContext'
import { IonContent, IonIcon, IonPage } from '@ionic/react'
import { mailOutline, person, personOutline, camera } from 'ionicons/icons'
import { useState } from 'react'

const ProfileSettings = () => {
    const { authState } = useAuth()
    const [file, setFile] = useState<any>(null)

    return (
        <IonPage style={{ overflow: 'hidden' }}>
            <IonContent fullscreen >
                <h1 className='font-medium pt-4 px-3 text-[22px]'>Modifier vos informations personelles</h1>
                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-6 mt-6">
                            <div className="xl:col-span-3 lg:col-span-4 md:col-span-4">
                                <div className="p-6 relative rounded-md shadow dark:border-[0.0009px] dark:border-white border-[0.9px] border-slate-200 bg-white dark:bg-transparent">
                                    <div className="profile-pic text-center">
                                        {/**@ts-ignore */}
                                        <input id="pro-img" onChange={(e) => setFile(e.target.files[0])} name="profile-image" type="file" className="hidden" />
                                        <div>
                                            <div className="relative size-24 mx-auto">
                                                {file ? (<img src={URL.createObjectURL(file)} className="rounded-full shadow dark:border-[0.0009px] dark:border-white border-[0.9px] border-slate-200 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt={authState?.user?.firstName + " " + authState?.user?.lastName + " " + "image"} />)
                                                    : (authState.user?.profilePic ? <img src={authState.user?.profilePic} className="rounded-full shadow dark:border-[0.0009px] dark:border-white border-[0.9px] border-slate-200 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt={authState?.user?.firstName + " " + authState?.user?.lastName + " " + "image"} />
                                                        : <div className="flex justify-center items-center rounded-full size-24 shadow dark:border-[0.0009px] dark:border-white border-[0.9px] border-slate-200 ring-4 ring-slate-50 dark:ring-slate-800">
                                                            <IonIcon icon={camera} className='text-[24px] ' />
                                                        </div>
                                                    )
                                                }
                                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="text-lg font-semibold">{authState?.user?.firstName + " "}{authState?.user?.lastName}</h5>
                                                <p className="text-slate-400">{authState?.user?.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:col-span-9 lg:col-span-8 md:col-span-8">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="p-6 relative rounded-md shadow dark:border-[0.0009px] dark:border-white border-[0.9px] border-slate-200 bg-white dark:bg-transparent">
                                        <h5 className="text-lg font-medium mb-4">Informations personelles :</h5>
                                        <form>
                                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                                <div>
                                                    <label className="form-label font-medium">Votre Prénom</label>
                                                    <div className="form-icon relative mt-2">
                                                        <IonIcon icon={personOutline} className="size-4 absolute top-3 start-4" />
                                                        <input type="text" defaultValue={authState?.user?.firstName} className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="form-label font-medium">Votre Nom</label>
                                                    <div className="form-icon relative mt-2">
                                                        <IonIcon icon={person} className="size-4 absolute top-3 start-4" />
                                                        <input type="text" defaultValue={authState?.user?.lastName} className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Last Name:" id="lastname" name="name" required />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="form-label font-medium">Votre Adresse Email</label>
                                                    <div className="form-icon relative mt-2">
                                                        <IonIcon icon={mailOutline} className="size-4 absolute top-3 start-4" />
                                                        <input type="email" defaultValue={authState?.user?.email} className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Email" name="email" required />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="form-label font-medium">Occupation : </label>
                                                    <div className="form-icon relative mt-2">
                                                        <i data-feather="bookmark" className="size-4 absolute top-3 start-4"></i>
                                                        <input name="name" id="occupation" type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Occupation :" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1">
                                                <div className="mt-5">
                                                    <label className="form-label font-medium">Description : </label>
                                                    <div className="form-icon relative mt-2">
                                                        <i data-feather="message-circle" className="size-4 absolute top-3 start-4"></i>
                                                        <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Message :"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <input type="submit" id="submit" name="send" className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md mt-5" value="Save Changes" />
                                        </form>
                                    </div>

                                    <div className="p-6 relative rounded-md shadow dark:border-[0.0009px] dark:border-white border-[0.9px] border-slate-200 bg-white dark:bg-transparent">
                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                            <div>
                                                <h5 className="text-lg font-medium mb-4">Contact Info :</h5>

                                                <form>
                                                    <div className="grid grid-cols-1 gap-5">
                                                        <div>
                                                            <label className="form-label font-medium">Phone No. :</label>
                                                            <div className="form-icon relative mt-2">
                                                                <i data-feather="phone" className="size-4 absolute top-3 start-4"></i>
                                                                <input name="number" id="number" type="number" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Phone :" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label className="form-label font-medium">Website :</label>
                                                            <div className="form-icon relative mt-2">
                                                                <i data-feather="globe" className="size-4 absolute top-3 start-4"></i>
                                                                <input name="url" id="url" type="url" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Url :" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md mt-5">Add</button>
                                                </form>
                                            </div>

                                            <div>
                                                <h5 className="text-lg font-medium mb-4">Change password :</h5>
                                                <form>
                                                    <div className="grid grid-cols-1 gap-5">
                                                        <div>
                                                            <label className="form-label font-medium">Old password :</label>
                                                            <div className="form-icon relative mt-2">
                                                                <i data-feather="key" className="size-4 absolute top-3 start-4"></i>
                                                                <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Old password" required />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label className="form-label font-medium">New password :</label>
                                                            <div className="form-icon relative mt-2">
                                                                <i data-feather="key" className="size-4 absolute top-3 start-4"></i>
                                                                <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="New password" required />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label className="form-label font-medium">Re-type New password :</label>
                                                            <div className="form-icon relative mt-2">
                                                                <i data-feather="key" className="size-4 absolute top-3 start-4"></i>
                                                                <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-transparent dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Re-type New password" required />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md mt-5">Save password</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 relative rounded-md shadow dark:border-[0.0009px] dark:border-white border-[0.9px] border-slate-200 bg-white dark:bg-transparent">
                                        <h5 className="text-lg font-medium mb-4 text-red-600">Delete Account :</h5>

                                        <p className="text-slate-400 mb-4">Do you want to delete the account? Please press below "Delete" button</p>

                                        <a href="#" className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Delete</a>
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

export default ProfileSettings