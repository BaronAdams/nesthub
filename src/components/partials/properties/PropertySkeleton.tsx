import { IonSkeletonText } from '@ionic/react'

const PropertySkeleton = () => {
  return (
    <div className="w-[92%] rounded-xl bg-white dark:bg-[#1c1c1d] shadow dark:shadow-gray-700 overflow-hidden ease-in-out duration-500 mx-auto">
        <div className="md:flex">
            <IonSkeletonText 
            className="size-full h-[230.52px] object-cover rounded-t-xl md:w-48"
            animated={true}></IonSkeletonText>
            <div className="p-6 w-full">
                    <div className="pb-3 w-full flex justify-between">
                        <div className='flex'>
                            <IonSkeletonText className={`w-20 rounded h-6`} animated={true} >
                            </IonSkeletonText>
                            <IonSkeletonText className={`w-20 ml-2 rounded h-6`} animated={true} >
                            </IonSkeletonText>
                        </div>
                        <IonSkeletonText className={`w-8 rounded h-6`} animated={true} >
                        </IonSkeletonText>
                    </div>
                    <div className="py-3">
                    <IonSkeletonText className={`w-72 rounded h-6`} animated={true} >
                    </IonSkeletonText>
                    </div>
                    <ul className="py-3 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                        <li className="flex items-center me-4">
                            <IonSkeletonText className={`w-12 rounded h-6`} animated={true} >
                            </IonSkeletonText>
                        </li>

                        <li className="flex items-center me-4">
                            <IonSkeletonText className={`w-12 rounded h-6`} animated={true} >
                            </IonSkeletonText>
                        </li>

                        <li className="flex items-center">
                            {/* <IonIcon icon={bed} className='text-blue-500 mr-2' /> */}
                            <IonSkeletonText className={`w-12 rounded h-6`} animated={true} >
                            </IonSkeletonText>
                        </li>
                    </ul>

                    <ul className="pt-3 flex justify-between items-center list-none">
                        <li>
                            <IonSkeletonText className={`w-12 rounded h-6`} animated={true} >
                            </IonSkeletonText>
                            <IonSkeletonText className={`w-28 rounded h-6`} animated={true} >
                            </IonSkeletonText>
                        </li>

                        <li>
                        <IonSkeletonText className={`w-12 rounded h-6`} animated={true} >
                        </IonSkeletonText>
                            <ul className="text-lg font-medium list-none">
                            <IonSkeletonText className={`w-28 rounded h-6`} animated={true} >
                            </IonSkeletonText>
                            </ul>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default PropertySkeleton