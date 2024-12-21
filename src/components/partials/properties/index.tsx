import { IonIcon } from '@ionic/react';
import { star, bed, heart, radioButtonOn, starHalf, starOutline } from 'ionicons/icons';
import { BathIcon, PinIcon } from '@/components/icons';
import { IProperty, properties } from '@/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'


function Property({ property }: { property: IProperty }) {
    // let color = 'cyan'
    // #1c1c1d
    // dark:bg-slate-900
    return (
        <div className="w-[95%] group rounded-xl bg-white dark:bg-[#1c1c1d] shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 mx-auto">
            <div className="md:flex">
                <div className="relative md:shrink-0">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper relative z-10"
                    >
                        <div className="absolute z-100 top-4 end-4">
                            <span className="btn btn-icon z-100 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 hover:cursor-pointer dark:hover:text-red-600">
                                <IonIcon icon={heart} className="text-[20px]" />
                            </span>
                        </div>
                        <SwiperSlide className="z-10" ><img className="size-full object-cover rounded-xl md:w-48" src={property.img} alt="something" /></SwiperSlide>
                        <SwiperSlide className="z-10" ><img className="size-full object-cover rounded-xl md:w-48" src={property.img} alt="something" /></SwiperSlide>
                        <SwiperSlide className="z-10" ><img className="size-full object-cover rounded-xl md:w-48" src={property.img} alt="something" /></SwiperSlide>
                        <SwiperSlide className="z-10" ><img className="size-full object-cover rounded-xl md:w-48" src={property.img} alt="something" /></SwiperSlide>
                        <SwiperSlide className="z-10" ><img className="size-full object-cover rounded-xl md:w-48" src={property.img} alt="something" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="p-6 w-full">
                    <div className="pb-3">
                        <span className={`bg-blue-600/10 text-blue-600 text-sm px-2.5 py-2.5 rounded h-6`}>
                            {property.icon}
                            {property.type}
                        </span>
                        <span className="ml-2 bg-green-600/10 text-green-600 text-sm px-2.5 py-2.5 rounded h-6">
                            <PinIcon className='text-green-600 text-[14px] inline mr-2' />
                            {property.place}
                        </span>
                    </div>
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

const Properties = () => {
    return (
        <div className="w-screen grid justify-start items-center lg:grid-cols-2 grid-cols-1 gap-[15px] mt-3">
            <h3 className="w-[95%] pl-4 md:text-3xl md:leading-normal text-xl text-[21.6px] leading-normal font-semibold">
                Disponibles pour vous
            </h3>
            {properties.map((el, index) => (
                <Property key={`${el.title}-${index}`} property={el} />
            ))}
        </div>
    )
}

export default Properties