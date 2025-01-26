import PropertyCard from './PropertyCard';
import { IProperty } from '@/data';

// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// const s3Client = new S3Client({
//   region: 'afr-cmr-dla3', // Exemple: 'us-east-1'
//   credentials: {
//     accessKeyId: 'P6wyfZEFt7rlV8kwalsC',
//     secretAccessKey: '3fiu8xoKwsygWyjFrwilgs9wdWFbGA0AD6advy8m',
//   }
// });

const PropertySection = ({ title, properties }: { title: string, properties: IProperty[] } ) => {
    return (
        <div className="w-screen grid justify-start items-center lg:grid-cols-2 grid-cols-1 gap-[15px] mt-3">
            <h3 className="w-[95%] pl-4 md:text-3xl md:leading-normal text-xl text-[21.6px] leading-normal font-semibold">
                {title}
            </h3>
            {properties.map((el, index) => (
                <PropertyCard key={`${el.title}-${index}`} property={el} />
            ))}

        </div>
    )
}

export default PropertySection