import { IcAC, IcBathroom, IcBedroom, IcCities, IcDiningroom, IcLivingroom, IcRefrigrator, IcTravelers, IcTreasure, IcTV, IcWifi } from "@/assets/ico"
import { ImgAnggana, ImgBlueOriginFams, ImgBobox, ImgCashVille, ImgDogClubs, ImgFamilyGroup, ImgFamilyGroup2, ImgGreenlake, ImgGreenPark, ImgLabourWait, ImgMinimal, ImgOceanIsland, ImgOneFive, ImgPodoWae, ImgPSWood, ImgSeattleRain, ImgSilverRain, ImgSnorkeling, ImgStarkHouse, ImgStaysHome, ImgTabbyTown, ImgVillage, ImgVillage2, ImgVillage3, ImgVinnaVill, ImgWoodenPit } from "@/assets/images"
export const mockData = {
    itemList: [
        {
            name: "travelers",
            count: 80409,
            icon: IcTravelers,
        },
        {
            name: "treasure",
            count: 862,
            icon: IcTreasure,
        },
        {
            name: "cities",
            count: 1492,
            icon: IcCities,
        }
    ],
    product: [
        {   
            name: "Houses with beauty backyard",
            category: "houses",
            items: [
                {
                    id: 21,
                    name: "Tabby Town",
                    imgUrl: ImgTabbyTown,
                    location: "Gunung Batu, Indonesia",
                    isRecommended: true
                },
                {
                    id: 22,
                    name: "Anggana",
                    imgUrl: ImgAnggana,
                    location: "Bogor, Indonesia"
                },
                {
                    id: 23,
                    name: "Seattle Rain",
                    imgUrl: ImgSeattleRain,
                    location: "Jakarta, Indonesia"
                },
                {
                    id: 24,
                    name: "Wodden Pit",
                    imgUrl: ImgWoodenPit,
                    location: "Wonosobo, Indonesia"
                }
            ]
        },
        {   
            name: "Hotels with large living room",
            category: "hotels",
            items: [
                {
                    id: 31,
                    name: "Green Park",
                    imgUrl: ImgGreenPark,
                    location: "Tangerang, Indonesia"
                },
                {
                    id: 32,
                    name: "Podo Wae",
                    imgUrl: ImgPodoWae,
                    location: "Madiun, Indonesia"
                },
                {
                    id: 33,
                    name: "Silver Rain",
                    imgUrl: ImgSilverRain,
                    location: "Bandung, Indonesia"
                },
                {
                    id: 34,
                    name: "Cashville",
                    imgUrl: ImgCashVille,
                    location: "Kemang, Indonesia",
                    isRecommended: true
                }
            ]
        },
        {   
            name: "Apartments with kitchen set",
            category: "apartments",
            items: [
                {
                    id: 41,
                    name: "PS Wood",
                    imgUrl: ImgPSWood,
                    location: "Depok, Indonesia"
                },
                {
                    id: 42,
                    name: "One Five",
                    imgUrl: ImgOneFive,
                    location: "Jakarta, Indonesia"
                },
                {
                    id: 43,
                    name: "Minimal",
                    imgUrl: ImgMinimal,
                    location: "Bogor, Indonesia",
                    isRecommended: true
                },
                {
                    id: 44,
                    name: "Stays Home",
                    imgUrl: ImgStaysHome,
                    location: "Wonosobo, Indonesia"
                }
            ]
        }
    ],
    productPopular: [
        {
            id: 1,
            name: "Blue Origin Fams",
            location: "Jakarta Indonesia",
            price: 50,
            imgUrl: ImgBlueOriginFams
        },
        {
            id: 2,
            name: "Ocean Land",
            location: "Bandung Indonesia",
            price: 22,
            imgUrl: ImgOceanIsland
        },
        {
            id: 3,
            name: "Stark House",
            location: "Malang Indonesia",
            price: 856,
            imgUrl: ImgStarkHouse
        },
        {
            id: 4,
            name: "Vinna Vill",
            location: "Malang Indonesia",
            price: 62,
            imgUrl: ImgVinnaVill
        },
        {
            id: 5,
            name: "Bobox",
            location: "Medan Indonesia",
            price: 72,
            imgUrl: ImgBobox
        }
    ],
    contentFooter: [
        {
            id: 1,
            title: "For Beginners",
            item: [
                {
                    id: 1,
                    url: "/under-development",
                    name: "New Account"
                },
                {
                    id: 2,
                    url: "/under-development",
                    name: "Start Booking a Room"
                },
                {
                    id: 3,
                    url: "/under-development",
                    name: "Use Payments"
                }
            ]
        },
        {
            id: 2,
            title: "Explore Us",
            item: [
                {
                    id: 1,
                    url: "/under-development",
                    name: "Our Careers"
                },
                {
                    id: 2,
                    url: "/under-development",
                    name: "Privacy"
                },
                {
                    id: 3,
                    url: "/under-development",
                    name: "Terms & Conditions"
                }
            ]
        },
        {
            id: 3,
            title: "Connect Us",
            item: [
                {
                    id: 1,
                    url: "/under-development",
                    name: "support@staycation.id"
                },
                {
                    id: 2,
                    url: "/under-development",
                    name: "021 - 2208 - 1996"
                },
                {
                    id: 3,
                    url: "/under-development",
                    name: "Staycation, Kemang, Jakarta"
                }
            ]
        }
    ],
    productById: {
        id: 1,
        name: "Village Liburi",
        location: "Bogor, Indonesia",
        description: "<p>Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p><p>Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p><p>Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.</p>",
        price: 280,
        facilities: [
            {
                name: "bedroom",
                count: 5,
                icon: IcBedroom,
            },
            {
                name: "living room",
                count: 1,
                icon: IcLivingroom,
            },
            {
                name: "bathroom",
                count: 3,
                icon: IcBathroom,
            },
            {
                name: "dinning Room",
                count: 1,
                icon: IcDiningroom,
            },
            {
                name: "mpb/s",
                count: 10,
                icon: IcWifi,
            },
            {
                name: "unit ready",
                count: 10,
                icon: IcAC,
            },
            {
                name: "refigrator",
                count: 2,
                icon: IcRefrigrator,
            },
            {
                name: "television",
                count: 4,
                icon: IcTV,
            }
        ],
        images: [
            ImgVillage, ImgVillage2, ImgVillage3
        ]
    },
    productByCategory: {   
        name: "Treasure to Choose",
        category: "treasure",
        items: [
            {
                id: 51,
                name: "Green Lake",
                imgUrl: ImgGreenlake,
                location: "Nature"
            },
            {
                id: 52,
                name: "Dog Clubs",
                imgUrl: ImgDogClubs,
                location: "Pool"
            },
            {
                id: 53,
                name: "Labour and Wait",
                imgUrl: ImgLabourWait,
                location: "Jakarta, Indonesia",
                isRecommended: true
            },
            {
                id: 54,
                name: "Snorkeling",
                imgUrl: ImgSnorkeling,
                location: "Beach"
            }
        ]
    },
    testimonial: [
        {
            id: 1,
            name: "Rick Grimes",
            carrier: "Actor",
            rate: 5,
            comment: "What a great trip with my family and I should try again next time soon ...",
            imgUrl: ImgFamilyGroup
        },
        {
            id: 1,
            name: "Daryl Dixon",
            carrier: "Actor",
            rate: 5,
            comment: "As a wife I can pick a great trip with my own lovely family ... thank you!",
            imgUrl: ImgFamilyGroup2
        }
    ]
}