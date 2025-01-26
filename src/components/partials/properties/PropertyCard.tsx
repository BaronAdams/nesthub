import { IonIcon, IonActionSheet } from '@ionic/react';
import { star, bed, heart, radioButtonOn, starHalf, starOutline, optionsOutline, options, bookmark, close, share, mail, shareSocial, paperPlane } from 'ionicons/icons';
import { BathIcon, PinIcon } from '@/components/icons';
import { IProperty } from '@/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'

const PropertyCard = ({ property }: { property: IProperty }) => {
    return (
        <div className="w-[92%] group rounded-xl bg-white dark:bg-[#1c1c1d] shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 mx-auto">
            <div className="md:flex">
                {/* <div className="relative md:shrink-0"> */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]} 
                    className="relative z-10"
                >
                    {/* Bouton en haut à droite */}
                    <div className="absolute z-50 top-4 right-4 flex gap-2">
                        <span className="btn btn-icon z-50 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-900/10 dark:text-slate-100 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 hover:cursor-pointer">
                            <IonIcon icon={heart} className="text-[20px]" />
                        </span>
                        <span className="btn btn-icon z-50 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-900/10 dark:text-slate-100 focus:text-blue-600 dark:focus:text-blue-600 hover:text-blue-600 dark:hover:text-blue-600 hover:cursor-pointer">
                            <IonIcon icon={bookmark} className="text-[20px]" />
                        </span>
                    </div>
                    <div className={`absolute z-50 top-4 left-4 ${property.statusBgColor} p-1 rounded-[5.5px] text-[12.8px] text-white`}>
                        {property.status}
                    </div>

                    {/* Slides */}
                    {[...Array(5)].map((_, index) => (
                        <SwiperSlide key={index} className="z-10">
                            <LazyLoadImage
                                className="size-full h-[230.52px] object-cover rounded-t-xl md:w-48"
                                src={property.img}
                                alt={`Slide ${index + 1}`}
                                effect='opacity'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* </div> */}
                <div className="p-6 w-full">
                    <div className="pb-3 w-full flex justify-between">
                        <div>
                            <span className={`bg-blue-600/10 text-blue-600 text-sm px-2.5 py-2.5 rounded h-6`}>
                                {property.icon}
                                {property.type}
                            </span>
                            <span className="ml-2 bg-green-600/10 text-green-600 text-sm px-2.5 py-2.5 rounded h-6">
                                <PinIcon className='text-green-600 text-[14px] inline mr-2' />
                                {property.place}
                            </span>
                        </div>
                        <IonIcon icon={optionsOutline} className="text-[20px] hover:cursor-pointer" id={`open-action-property-${property.id}`} />
                    </div>
                    <IonActionSheet
                        trigger={`open-action-property-${property.id}`}
                        buttons={[
                            {
                                text: 'Ajouter aux favoris',
                                icon: heart,
                                handler: () =>console.log("Added to favorites"),
                                cssClass:""
                            },
                            {
                                text: 'Ajouter aux enregistrements',
                                icon: bookmark,
                                handler: ()=>console.log("Added to tracks"),
                            },
                            {
                                text: 'Ajouter un commentaire',
                                icon: mail,
                                handler: ()=>console.log("Share"),
                            },
                            {
                                text: 'Partager',
                                icon: paperPlane,
                                handler: ()=>console.log("Share"),
                            },
                            {
                                text: 'Annuler',
                                role: 'cancel',
                                data: {
                                    action: 'cancel',
                                },
                                icon: close
                            },
                        ]}
                    ></IonActionSheet>
                    <div className="py-3">
                        <a href="property-detail.html" className="text-lg text-left hover:text-blue-500 dark:hover:text-blue-500 dark:text-white font-medium ease-in-out duration-500">{property.title}</a>
                    </div>
                    <ul className="py-3 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                        <li className="flex items-center me-4">
                            <IonIcon icon={radioButtonOn} className='text-blue-500 mr-2' />
                            <span className='dark:text-white'>{property.area} m2</span>
                        </li>

                        <li className="flex items-center me-4">
                            <IonIcon icon={bed} className='text-blue-500 mr-2' />
                            <span className='dark:text-white'>{property.beds} chs</span>
                        </li>

                        <li className="flex items-center">
                            {/* <IonIcon icon={bed} className='text-blue-500 mr-2' /> */}
                            <BathIcon className='text-blue-500 text-[16px] mr-2' />
                            <span className='dark:text-white'>{property.bath} sdbs</span>
                        </li>
                    </ul>

                    <ul className="pt-3 flex justify-between items-center list-none">
                        <li>
                            <span className="text-slate-400">Prix</span>
                            <p className="text-lg font-medium dark:text-white">{property.price} XAF</p>
                        </li>

                        <li>
                            <span className="text-slate-400">Etoiles</span>
                            <ul className="text-lg font-medium text-amber-400 list-none">
                                {Array(property.detailStars.fillStars).fill(0).map((elt, index) => (
                                    <li key={index} className="inline"><IonIcon icon={star} /></li>)
                                )}
                                {property.detailStars.hasHalfStar && <li className="inline"><IonIcon icon={starHalf} /></li>}
                                {Array(property.detailStars.emptyStars).fill(0).map((elt, index) => (
                                    <li key={index} className="inline"><IonIcon icon={starOutline} /></li>)
                                )}
                                <li className="inline ml-2 text-black dark:text-white">{`${property.rawStars}`}({property.reviewers})</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard