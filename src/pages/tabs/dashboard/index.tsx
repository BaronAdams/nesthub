import { useAuth } from '@/lib/context/AuthContext';
import { IonAvatar, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { authState } = useAuth()
    const styleSheet = {
        header: {
            boxShadow: 'none',
            padding: 15,
            display: 'flex',
            justifyContent: 'space-between'
        },
        avatar: {
            width: 28,
            height: 28,
        }
    }

    return (
        <IonPage>
            {/* {error && (
                <IonText>Une erreur est survenue</IonText>
            )}
            {(!authState?.isAuthenticated || !["seller","admin","both"].includes(authState.user?.role)) && <Redirect to='/tabs/home'/> }
            { authState.isAuthenticated && ["seller","admin","both"].includes(authState.user?.role) && (
                <> */}
                    <IonHeader style={styleSheet.header}>
                        <span>Logo</span>
                        <div>
                            {authState?.user?.profilePic ?
                                <img src={authState.user?.profilePic} className='w-[36.4px] h-[36.4px] rounded-full' alt="Profile picture" />
                                : authState?.user?.firstName && (
                                    <IonAvatar style={styleSheet.avatar}>
                                        <div style={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: authState?.user?.color }} className={`w-full h-full rounded-full text-[16px] text-white pt-1`}>
                                            {authState.user?.firstName[0].toUpperCase()}
                                        </div>
                                    </IonAvatar>
                                )
                            }
                        </div>
                    </IonHeader>
                    <IonContent fullscreen>
                        <main className="page-content bg-gray-50 dark:bg-slate-800">
                            <div className="container-fluid relative px-3">
                                <div className="layout-specing">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h5 className="text-xl font-semibold">Hello, Calvin</h5>
                                            <h6 className="text-slate-400">Welcome back!</h6>
                                        </div>
                                    </div>

                                    <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                            <div className="p-5 flex items-center justify-between">
                                                <span className="me-3">
                                                    <span className="text-slate-400 block">Total Revenue</span>
                                                    <span className="flex items-center justify-between mt-1">
                                                        <span className="text-2xl font-medium">$ <span className="counter-value" data-target="45890">42205</span></span>
                                                    </span>
                                                </span>

                                                <span className="flex justify-center items-center rounded-md size-12 min-w-[48px] bg-slate-50 dark:bg-slate-800 shadow shadow-gray-100 dark:shadow-gray-700 text-green-600">
                                                    <i className="mdi mdi-currency-usd text-[28px]"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                            <div className="p-5 flex items-center justify-between">
                                                <span className="me-3">
                                                    <span className="text-slate-400 block">Total Visitor</span>
                                                    <span className="flex items-center justify-between mt-1">
                                                        <span className="text-2xl font-medium"><span className="counter-value" data-target="2456">1857</span></span>
                                                    </span>
                                                </span>

                                                <span className="flex justify-center items-center rounded-md size-12 min-w-[48px] bg-slate-50 dark:bg-slate-800 shadow shadow-gray-100 dark:shadow-gray-700 text-green-600">
                                                    <i className="mdi mdi-account-group-outline text-[28px]"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                            <div className="p-5 flex items-center justify-between">
                                                <span className="me-3">
                                                    <span className="text-slate-400 block">Total Properties</span>
                                                    <span className="flex items-center justify-between mt-1">
                                                        <span className="text-2xl font-medium"><span className="counter-value" data-target="358">54</span></span>
                                                    </span>
                                                </span>

                                                <span className="flex justify-center items-center rounded-md size-12 min-w-[48px] bg-slate-50 dark:bg-slate-800 shadow shadow-gray-100 dark:shadow-gray-700 text-green-600">
                                                    <i className="mdi mdi-home-city-outline text-[28px]"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                            <div className="p-5 flex items-center justify-between">
                                                <span className="me-3">
                                                    <span className="text-slate-400 block">Properties for Sell</span>
                                                    <span className="flex items-center justify-between mt-1">
                                                        <span className="text-2xl font-medium"><span className="counter-value" data-target="243">60</span></span>
                                                    </span>
                                                </span>

                                                <span className="flex justify-center items-center rounded-md size-12 min-w-[48px] bg-slate-50 dark:bg-slate-800 shadow shadow-gray-100 dark:shadow-gray-700 text-green-600">
                                                    <i className="mdi mdi-home-lightning-bolt-outline text-[28px]"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                            <div className="p-5 flex items-center justify-between">
                                                <span className="me-3">
                                                    <span className="text-slate-400 block">Properties for Rent</span>
                                                    <span className="flex items-center justify-between mt-1">
                                                        <span className="text-2xl font-medium"><span className="counter-value" data-target="115">45</span></span>
                                                    </span>
                                                </span>

                                                <span className="flex justify-center items-center rounded-md size-12 min-w-[48px] bg-slate-50 dark:bg-slate-800 shadow shadow-gray-100 dark:shadow-gray-700 text-green-600">
                                                    <i className="mdi mdi-home-clock-outline text-[28px]"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                                        <div className="lg:col-span-8">
                                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                                    <h6 className="text-lg font-semibold">Revenue Analytics</h6>

                                                    <div className="position-relative">
                                                        <select className="form-select form-input w-full py-2 h-10 bg-white dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                                            <option value="Y" selected>Yearly</option>
                                                            <option value="M">Monthly</option>
                                                            <option value="W">Weekly</option>
                                                            <option value="T">Today</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div id="mainchart" className="apex-chart px-4 pb-6"></div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-4">
                                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                                    <h6 className="text-lg font-semibold">Sales Data</h6>

                                                    <div className="position-relative">
                                                        <select className="form-select form-input w-full py-2 h-10 bg-white dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                                            <option value="Y" selected>Yearly</option>
                                                            <option value="M">Monthly</option>
                                                            <option value="W">Weekly</option>
                                                            <option value="T">Today</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="p-6">
                                                    <div>
                                                        <div className="flex justify-between mb-2">
                                                            <span className="text-slate-400">Via Website</span>
                                                            <span className="text-slate-400">50%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                                            <div className="bg-green-600 h-[6px] rounded-full" style={{ width: "50%" }}></div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <div className="flex justify-between mb-2">
                                                            <span className="text-slate-400">Via Team Member</span>
                                                            <span className="text-slate-400">12%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                                            <div className="bg-green-600 h-[6px] rounded-full" style={{ width: "12%" }}></div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <div className="flex justify-between mb-2">
                                                            <span className="text-slate-400">Via Agents</span>
                                                            <span className="text-slate-400">6%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                                            <div className="bg-green-600 h-[6px] rounded-full" style={{ width: "6%" }}></div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <div className="flex justify-between mb-2">
                                                            <span className="text-slate-400">Via Social Media</span>
                                                            <span className="text-slate-400">15%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                                            <div className="bg-green-600 h-[6px] rounded-full" style={{ width: "15%" }}></div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <div className="flex justify-between mb-2">
                                                            <span className="text-slate-400">Via Digital Marketing</span>
                                                            <span className="text-slate-400">12%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                                            <div className="bg-green-600 h-[6px] rounded-full" style={{ width: "12%" }}></div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <div className="flex justify-between mb-2">
                                                            <span className="text-slate-400">Via Others</span>
                                                            <span className="text-slate-400">5%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                                            <div className="bg-green-600 h-[6px] rounded-full" style={{ width: "5%" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                                        <div className="xl:col-span-3 lg:col-span-6 order-1">
                                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                                    <h6 className="text-lg font-semibold">Area Map</h6>

                                                    <span className="text-slate-400">Last update 5 days ago</span>
                                                </div>

                                                <div className="p-6">
                                                    <div id="map" className="w-full h-[236px]"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="xl:col-span-6 lg:col-span-12 xl:order-2 order-3">
                                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                                    <h6 className="text-lg font-semibold">Recent Transections</h6>

                                                    <a href="#" className="btn btn-link font-normal text-slate-400 hover:text-green-600 after:bg-green-600 transition duration-500">View orders <i className="mdi mdi-arrow-right ms-1"></i></a>
                                                </div>

                                                <div className="relative overflow-x-auto block w-full xl:max-h-[284px] max-h-[350px]" data-simplebar>
                                                    <table className="w-full text-start">
                                                        <thead className="text-base">
                                                            <tr>
                                                                <th className="text-start font-semibold text-[15px] px-4 py-3"></th>
                                                                <th className="text-start font-semibold text-[15px] px-4 py-3 min-w-[140px]">Date</th>
                                                                <th className="text-start font-semibold text-[15px] px-4 py-3 min-w-[120px]">Name</th>
                                                                <th className="text-start font-semibold text-[15px] px-4 py-3">Price</th>
                                                                <th className="text-start font-semibold text-[15px] px-4 py-3 min-w-[40px]">Type</th>
                                                                <th className="text-end font-semibold text-[15px] px-4 py-3 min-w-[70px]">Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">
                                                                    <div className="relative md:shrink-0">
                                                                        <img src="assets/images/property/1.jpg" className="object-cover size-12 min-w-[48px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                                    </div>
                                                                </th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">10th Aug 2023</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Mr. Rocky</th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">$1245/M</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Rent</th>
                                                                <td className="text-end border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[15px] font-medium px-2.5 py-0.5 rounded h-5 ms-1">Paid</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">
                                                                    <div className="relative md:shrink-0">
                                                                        <img src="assets/images/property/2.jpg" className="object-cover size-12 min-w-[48px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                                    </div>
                                                                </th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">10th Aug 2023</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Mr. Cristino</th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">$12450</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Sell</th>
                                                                <td className="text-end border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[15px] font-medium px-2.5 py-0.5 rounded h-5 ms-1">Unpaid</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">
                                                                    <div className="relative md:shrink-0">
                                                                        <img src="assets/images/property/3.jpg" className="object-cover size-12 min-w-[48px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                                    </div>
                                                                </th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">10th Aug 2023</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Mr. Jack</th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">$12450</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Sell</th>
                                                                <td className="text-end border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[15px] font-medium px-2.5 py-0.5 rounded h-5 ms-1">Paid</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">
                                                                    <div className="relative md:shrink-0">
                                                                        <img src="assets/images/property/4.jpg" className="object-cover size-12 min-w-[48px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                                    </div>
                                                                </th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">10th Aug 2023</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Ms. Cally</th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">$12450</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Sell</th>
                                                                <td className="text-end border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[15px] font-medium px-2.5 py-0.5 rounded h-5 ms-1">Unpaid</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">
                                                                    <div className="relative md:shrink-0">
                                                                        <img src="assets/images/property/5.jpg" className="object-cover size-12 min-w-[48px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                                    </div>
                                                                </th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">10th Aug 2023</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Ms. Cristina</th>
                                                                <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="text-slate-400">$1245/M</span>
                                                                </td>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">Rent</th>
                                                                <td className="text-end border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                                    <span className="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[15px] font-medium px-2.5 py-0.5 rounded h-5 ms-1">Unpaid</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="xl:col-span-3 lg:col-span-6 xl:order-3 order-2">
                                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                                    <h6 className="text-lg font-semibold">Top Properties</h6>

                                                    <a href="#" className="btn btn-link font-normal text-slate-400 hover:text-green-600 after:bg-green-600 transition duration-500">See More <i className="mdi mdi-arrow-right ms-1"></i></a>
                                                </div>

                                                <div className="relative overflow-x-auto block w-full max-h-[284px] p-6" data-simplebar>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <div className="relative md:shrink-0">
                                                                <img src="assets/images/property/1.jpg" className="object-cover size-14 min-w-[56px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                            </div>

                                                            <div className="ms-2">
                                                                <a href="#" className="font-medium hover:text-green-600 block text-lg">House</a>
                                                                <span className="text-slate-400">Baton Rouge, USA</span>
                                                            </div>
                                                        </div>

                                                        <span className="w-20 text-red-600 text-end"><i className="mdi mdi-arrow-bottom-right"></i> 11%</span>
                                                    </div>

                                                    <div className="flex justify-between items-center mt-4">
                                                        <div className="flex items-center">
                                                            <div className="relative md:shrink-0">
                                                                <img src="assets/images/property/2.jpg" className="object-cover size-14 min-w-[56px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                            </div>

                                                            <div className="ms-2">
                                                                <a href="#" className="font-medium hover:text-green-600 block text-lg">House</a>
                                                                <span className="text-slate-400">Baton Rouge, USA</span>
                                                            </div>
                                                        </div>

                                                        <span className="w-20 text-emerald-600 text-end"><i className="mdi mdi-arrow-top-right"></i> 20%</span>
                                                    </div>

                                                    <div className="flex justify-between items-center mt-4">
                                                        <div className="flex items-center">
                                                            <div className="relative md:shrink-0">
                                                                <img src="assets/images/property/3.jpg" className="object-cover size-14 min-w-[56px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                            </div>

                                                            <div className="ms-2">
                                                                <a href="#" className="font-medium hover:text-green-600 block text-lg">House</a>
                                                                <span className="text-slate-400">Baton Rouge, USA</span>
                                                            </div>
                                                        </div>

                                                        <span className="w-20 text-emerald-600 text-end"><i className="mdi mdi-arrow-top-right"></i> 24%</span>
                                                    </div>

                                                    <div className="flex justify-between items-center mt-4">
                                                        <div className="flex items-center">
                                                            <div className="relative md:shrink-0">
                                                                <img src="assets/images/property/4.jpg" className="object-cover size-14 min-w-[56px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                            </div>

                                                            <div className="ms-2">
                                                                <a href="#" className="font-medium hover:text-green-600 block text-lg">House</a>
                                                                <span className="text-slate-400">Baton Rouge, USA</span>
                                                            </div>
                                                        </div>

                                                        <span className="w-20 text-emerald-600 text-end"><i className="mdi mdi-arrow-top-right"></i> 21%</span>
                                                    </div>

                                                    <div className="flex justify-between items-center mt-4">
                                                        <div className="flex items-center">
                                                            <div className="relative md:shrink-0">
                                                                <img src="assets/images/property/5.jpg" className="object-cover size-14 min-w-[56px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                                            </div>

                                                            <div className="ms-2">
                                                                <a href="#" className="font-medium hover:text-green-600 block text-lg">House</a>
                                                                <span className="text-slate-400">Baton Rouge, USA</span>
                                                            </div>
                                                        </div>

                                                        <span className="w-20 text-emerald-600 text-end"><i className="mdi mdi-arrow-top-right"></i> 45%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </IonContent>
                {/* </>)} */}
        </IonPage>
    );
};

export default Dashboard;