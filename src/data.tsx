import React from "react";
import { ApartmentIcon, BuildingIcon, DuplexIcon, HallIcon, LandIcon, OfficeIcon, StudioIcon, VillaIcon } from "./components/icons";

export interface IProperty {
    title: string,
    img: string,
    rawStars: string,
    area: number,
    beds: number,
    bath: number,
    price: number | string,
    type: string,
    place: string,
    icon: any,
    color: string | undefined,
    detailStars : { fillStars: number, emptyStars: number, hasHalfStar: boolean },
    reviewers: number
}

export const propertyTypes = [
    {
        desc: "Appartement",
        image: "/property/1.jpg",
        color:'cyan',
        icon(){ 
            return <ApartmentIcon className={`text-[14px] inline mr-2`} />
        }
    },
    { 
        desc: "Studio", 
        image: "/property/2.jpg",
        color:'lime',
        icon(){
            return <StudioIcon className={`text-[14px] inline mr-2`} />
        } 
    },
    { 
        desc: "Terrain", 
        image: "/property/3.jpg",
        color:'stone',
        icon(){
            return <LandIcon className={`text-[14px] inline mr-2`} />
        } 
    },
    { 
        desc: "Villa", 
        image: "/property/4.jpg",
        color:'red',
        icon(){
            return <VillaIcon className={`text-[14px] inline mr-2`} />
        } 
    },
    { 
        desc: "Duplex", 
        image: "/property/5.jpg",
        color:'blue',
        icon(){
            return <DuplexIcon className={`text-[14px] inline mr-2`} />
        } 
    },
    { 
        desc: "Bureau", 
        image: "/property/7.jpg",
        color:'purple',
        icon(){
            return <OfficeIcon className={`text-[14px] inline mr-2`} />
        } 
    },
    { 
        desc: "Banquet Hall", 
        image: "/property/8.jpg",
        color:'indigo',
        icon(){
            return <HallIcon className={`text-[14px] inline mr-2`} />
        } 
    },
    { 
        desc: "Immeuble", 
        image: "/property/9.jpg",
        color:'pink',
        icon(){
            return <BuildingIcon className={`text-[14px] inline mr-2`} />
        } 
    },
];

export const properties: IProperty[] = [
    {
        title: "914 FUWBU POINT, Earl Sharp Ovuweki, KP",
        img: "/property/1.jpg",
        rawStars: "4.5",
        area: 152,
        beds: 3,
        bath: 2,
        price: 5000,
        type: 'Appartement',
        place: 'Douala',
        get icon(){
            return propertyTypes.find(elt => elt.desc === this.type)?.icon()
        },
        get color(){
            return propertyTypes.find(elt => elt.desc === this.type)?.color
        },
        get detailStars(){
            let roundedStars = Math.floor(parseFloat(this.rawStars))
            let hasHalfStar = parseFloat(this.rawStars) - roundedStars === 0.5
            return {
                fillStars: roundedStars,
                emptyStars: 5 - Math.ceil(parseFloat(this.rawStars)),
                hasHalfStar
            }
        },
        reviewers:51
    },
    {
        title: "20 FEBER DRIVE, Cecilia Boyd Unabonu, EC",
        img: "/property/2.jpg",
        rawStars: "4.0",
        area: 152,
        beds: 3,
        bath: 2,
        price: 5000,
        type: 'Studio',
        place: 'Yaoundé',
        get icon(){
            return propertyTypes.find(elt => elt.desc === this.type)?.icon()
        },
        get color(){
            return propertyTypes.find(elt => elt.desc === this.type)?.color
        },
        get detailStars(){
            let roundedStars = Math.floor(parseFloat(this.rawStars))
            let hasHalfStar = parseFloat(this.rawStars) - roundedStars === 0.5
            return {
                fillStars: roundedStars,
                emptyStars: 5 - Math.ceil(parseFloat(this.rawStars)),
                hasHalfStar
            }
        },
        reviewers:27
    },
    {
        title: "513 REBE DRIVE, Mina Ortiz Hovusba, AL",
        img: "/property/3.jpg",
        rawStars: "5.0",
        area: 152,
        beds: 3,
        bath: 2,
        price: 5000,
        type: 'Terrain',
        place: 'Douala',
        get icon(){
            return propertyTypes.find(elt => elt.desc === this.type)?.icon()
        },
        get color(){
            return propertyTypes.find(elt => elt.desc === this.type)?.color
        },
        get detailStars(){
            let roundedStars = Math.floor(parseFloat(this.rawStars))
            let hasHalfStar = parseFloat(this.rawStars) - roundedStars === 0.5
            return {
                fillStars: roundedStars,
                emptyStars: 5 - Math.ceil(parseFloat(this.rawStars)),
                hasHalfStar
            }
        },
        reviewers:53
    },
    {
        title: "1384 HUBAV PIKE, Evelyn McKenzie Zonokse, KW",
        img: "/property/5.jpg",
        rawStars: "4.0",
        area: 152,
        beds: 3,
        bath: 2,
        price: 5000,
        type: 'Banquet Hall',
        place: 'Bafoussam',
        get icon(){
            return propertyTypes.find(elt => elt.desc === this.type)?.icon()
        },
        get color(){
            return propertyTypes.find(elt => elt.desc === this.type)?.color
        },
        get detailStars(){
            let roundedStars = Math.floor(parseFloat(this.rawStars))
            let hasHalfStar = parseFloat(this.rawStars) - roundedStars === 0.5
            return {
                fillStars: roundedStars,
                emptyStars: 5 - Math.ceil(parseFloat(this.rawStars)),
                hasHalfStar
            }
        },
        reviewers:41
    },
    {
        title: "Duplex à Tradex NDOKOTI, Douala, Cameroun",
        img: "/property/6.jpg",
        rawStars: "4.5",
        area: 152,
        beds: 3,
        bath: 2,
        price: '16M',
        type: 'Immeuble',
        place: 'Ngaoundéré',
        get icon(){
            return propertyTypes.find(elt => elt.desc === this.type)?.icon()
        },
        get color(){
            return propertyTypes.find(elt => elt.desc === this.type)?.color
        },
        get detailStars(){
            let roundedStars = Math.floor(parseFloat(this.rawStars))
            let hasHalfStar = parseFloat(this.rawStars) - roundedStars === 0.5
            return {
                fillStars: roundedStars,
                emptyStars: 5 - Math.ceil(parseFloat(this.rawStars)),
                hasHalfStar
            }
        },
        reviewers:14
    },
    {
        title: "47 CIFO MANOR, Sallie Estrada Mudukeme, TD",
        img: "/property/7.jpg",
        rawStars: "3.0",
        area: 152,
        beds: 3,
        bath: 2,
        price: 5000,
        type: 'Appartement',
        place: 'Garoua',
        get icon(){
            return propertyTypes.find(elt => elt.desc === this.type)?.icon()
        },
        get color(){
            return propertyTypes.find(elt => elt.desc === this.type)?.color
        },
        get detailStars(){
            let roundedStars = Math.floor(parseFloat(this.rawStars))
            let hasHalfStar = parseFloat(this.rawStars) - roundedStars === 0.5
            return {
                fillStars: roundedStars,
                emptyStars: 5 - Math.ceil(parseFloat(this.rawStars)),
                hasHalfStar
            }
        },
        reviewers:59
    },
    {
        title: "758 EGPO ROAD, Cordelia Hawkins Wehgusol, MF",
        img: "/property/8.jpg",
        rawStars: "3.5",
        area: 152,
        beds: 3,
        bath: 2,
        price: 5000,
        type: 'Villa',
        place: 'Yaoundé',
        get icon(){
            return propertyTypes.find(elt => elt.desc === this.type)?.icon()
        },
        get color(){
            return propertyTypes.find(elt => elt.desc === this.type)?.color
        },
        get detailStars(){
            let roundedStars = Math.floor(parseFloat(this.rawStars))
            let hasHalfStar = parseFloat(this.rawStars) - roundedStars === 0.5
            return {
                fillStars: roundedStars,
                emptyStars: 5 - Math.ceil(parseFloat(this.rawStars)),
                hasHalfStar
            }
        },
        reviewers:47
    },
]