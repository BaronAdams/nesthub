import { ApartmentIcon, BuildingIcon, DuplexIcon, HallIcon, LandIcon, OfficeIcon, StudioIcon, VillaIcon } from "./components/icons";

const getStatusBackgroundClass = (status: string) => {
    switch (status) {
      case "A louer":
        return "bg-green-500";
      case "A vendre":
        return "bg-blue-500";
      case "Indisponible":
        return "bg-yellow-500";
      case "Déja pris":
        return "bg-red-500";
      default:
        return "bg-gray-300"; // Couleur par défaut si le statut n'est pas défini
    }
};

const getTypeColorClasses = (type: string) => {
    switch (type) {
      case "Appartement":
        return "bg-cyan-600/10 text-cyan-600";
      case "Studio":
        return "bg-lime-600/10 text-lime-600";
      case "Terrain":
        return "bg-stone-600/10 text-stone-600";
      case "Villa":
        return "bg-red-600/10 text-red-600";
      case "Duplex":
        return "bg-blue-600/10 text-blue-600";
      case "Bureau":
        return "bg-purple-600/10 text-purple-600";
      case "Banquet Hall":
        return "bg-indigo-600/10 text-indigo-600";
      case "Immeuble":
        return "bg-pink-600/10 text-pink-600";
      default:
        return "bg-gray-600/10 text-gray-600"; // Couleur par défaut si le statut n'est pas défini
    }
};


export interface IProperty {
    id: number,
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
    typeColorClasses: string | undefined,
    detailStars : { fillStars: number, emptyStars: number, hasHalfStar: boolean },
    reviewers: number,
    status: "A vendre" | "A louer" | "Déja pris" | "Indisponible",
    statusBgColor: string
}

export const propertyTypesTags = ['Terrain', 'Villa', 'Salle de fêtes', 'Immeuble', 'Appartement', 'Duplex', 'Studio', 'Chambre d\'hôtel', 'Entrepôt', 'Maison de vacances', 'Bureau', 'Magasin', 'Espace de vente', 'Contenaire', 'Chambre étudiant', 'Maison']
export const cityTags = ["Bafoussam", "Bamenda", "Bertoua", "Buéa", "Douala", "Ebolowa", "Garoua", "Maroua", "Ngaoundéré", "Yaoundé"]
export const hoodTags = [
    {
        label:"Ndokoti",
        value:"Ndokoti"
    },
    {
        label:"Bonapriso, Carrefour Armée de l'air",
        value:"Bonapriso, Carrefour Armée de l'air"
    },
    {
        label:"Bonapriso, Carrefour Hotel de l'air",
        value:"Bonapriso, Carrefour Hotel de l'air"
    },
    {
        label:"Bali, Koumassi",
        value:"Bali, Koumassi"
    },
    {
        label:"Bonnamoussadi",
        value:"Bonnamoussadi"},
    {
        label:"Tradex Borne 10 Village",
        value:"Tradex Borne 10 Village"
    },
    {
        label:"1ère Entrée Cogefar",
        value:"1ère Entrée Cogefar"
    },
    {
        label:"Cité des Palmiers",
        value:"Cité des Palmiers"
    },
    {
        label:"PK8",
        value:"PK8"
    },
    {
        label:"PK10",
        value:"PK10"
    },
    {
        label:"PK12",
        value:"PK12"
    },
    {
        label:"PK14",
        value:"PK14"
    }
]
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
        id:4181002575,
        title: "914 FUWBU POINT, Earl Sharp Ovuweki",
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
        get typeColorClasses(){
            return getTypeColorClasses(this.type)
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
        reviewers:51,
        status: "A vendre",
        get statusBgColor(){
            return getStatusBackgroundClass(this.status)
        }
    },
    {
        id:449211459,
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
        get typeColorClasses(){
            return getTypeColorClasses(this.type)
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
        reviewers:27,
        status: "A louer",
        get statusBgColor(){
            return getStatusBackgroundClass(this.status)
        }
    },
    {
        id:2351981973,
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
        get typeColorClasses(){
            return getTypeColorClasses(this.type)
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
        reviewers:53,
        status: "Indisponible",
        get statusBgColor(){
            return getStatusBackgroundClass(this.status)
        }
    },
    {
        id:3880680207,
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
        get typeColorClasses(){
            return getTypeColorClasses(this.type)
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
        reviewers:41,
        status: "Déja pris",
        get statusBgColor(){
            return getStatusBackgroundClass(this.status)
        }
    },
    {
        id:3461589463,
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
        get typeColorClasses(){
            return getTypeColorClasses(this.type)
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
        reviewers:14,
        status: "A vendre",
        get statusBgColor(){
            return getStatusBackgroundClass(this.status)
        }
    },
    {
        id:2625987341,
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
        get typeColorClasses(){
            return getTypeColorClasses(this.type)
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
        reviewers:59,
        status: "A vendre",
        get statusBgColor(){
            return getStatusBackgroundClass(this.status)
        }
    },
    {
        id:1855990005,
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
        get typeColorClasses(){
            return getTypeColorClasses(this.type)
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
        reviewers:47,
        status: "A louer",
        get statusBgColor(){
            return getStatusBackgroundClass(this.status)
        }
    },
]