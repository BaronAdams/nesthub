import { IonSkeletonText } from '@ionic/react'
import PropertySkeleton from './PropertySkeleton'

const PropertySectionSkeleton = ({ title, propertySkeletons }: { title: string, propertySkeletons: any[] }) => {
    return (
        <div className="w-screen grid justify-start items-center lg:grid-cols-2 grid-cols-1 gap-[15px] mt-3">
            {/* <IonSkeletonText animated={true} className="w-[65%] ml-4 rounded h-7">
            </IonSkeletonText> */}
            <h3 className="w-[95%] pl-4 md:text-3xl md:leading-normal text-xl text-[21.6px] leading-normal font-semibold">
                {title}
            </h3>
            {propertySkeletons.map((el, index) => (
                <PropertySkeleton key={`${index}`} />
            ))}

        </div>
    )
}

export default PropertySectionSkeleton