import { bikeImgUrl, carImgUrl, CE, GPT, IC, MO, MUL, scooterImgUrl, VI } from "@/assets";

export interface HeroCardType {
  no: string;
  heading: string;
  filler: string;
}

export const cards: HeroCardType[] = [
  {
    no: "01",
    heading: "100% Electric",
    filler: "Modular mix & match electric mobility solutions",
  },

  {
    no: "02",
    heading: "Exclusive",
    filler: "They are only available to the building residents",
  },

  {
    no: "03",
    heading: "On- demand",
    filler: "Located in the building car park available & 24/7",
  },
  {
    no: "04",
    heading: "Fully managed",
    filler: "Ongoing service and management of all solutions",
  },

  {
    no: "05",
    heading: "One app",
    filler: "Access all e-mobility solutions via a seamless experience",
  },
];


interface LOGO {
  id:number,
  logo:string
}


export const logos:LOGO[]=[
  {id:1,logo:MUL},
  {id:2,logo:CE},
   {id:3,logo:VI},
  {id:4,logo:GPT},
  {id:5,logo:IC}
]


interface gallery extends LOGO{
  title:string
}


export const galleryItems:gallery[]=[
  {id:1,title:"Shared EVs",logo:carImgUrl},
  {id:2,title:"Shared e-bikes",logo:bikeImgUrl},
  {id:3,title:"Shared Shared e-scooters",logo:scooterImgUrl}
]
