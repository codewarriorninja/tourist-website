
import { Bangladesh, EffielTower, KajuruCastel, philpiness, plane, PrydeLand, slide, slideThree, slideTwo, TajMahal, tick, Vector } from "@/public"



export const NavLinks = [
    {href:'/', key:'home', label:'Places'},
    {href:'/', key:'about', label:'About'},
    {href:'/', key:'blog', label:'Blog'},
    {href:'/', key:'contact', label:'Contact'}
]

interface SlideProps {
    text:string
    description:string
    image:any
}

export const Slides:SlideProps[] = [
    { 
    text:'Explore The world with exciting people',
    description:'We help people find co-travelers and structure their travel plans',
    image:slide
    },
    { 
    text:'Plan your perfect trip with your friends',
    description:'Travel with ease and comfort',
    image:slideTwo
    },
    { 
    text:'Choose a place, activity, and time',
    description:'We make traveling more enjoyable',
    image:slideThree
    },
]

interface PlacesProps{
    id:number
    title:string
    description:string
}

export const Places:PlacesProps[] = [
    {id:1, title:'Chose a place, activity and time', description:'We help people find co travellers and also structure their travel plans '},
    {id:2, title:'Chose a place, activity and time', description:'We help people find co travellers and also structure their travel plans '},
    {id:3, title:'Chose a place, activity and time', description:'We help people find co travellers and also structure their travel plans '},
];

type AdvanturesProps = {
    text:string
}
export const Advantures:AdvanturesProps[] = [
    {text:'explore'},
    {text:'adventure'},
    {text:'luxury'},
    {text:'enjoy'},
]

export const Packages = [
    {
    imageUrl:tick,
    text:'Enjoy some flexibility',
    description:'stays with flexible cancelation make it easy to re-book if your plans change'
    },
    {
     imageUrl:plane,
     text:'Over 2 million active trips',
     description:'stays with flexible cancelation make it easy to re-book if your plans change'
    },
    {
     imageUrl:Vector,
     text:'Over 2 million active trips',
     description:'stays with flexible cancelation make it easy to re-book if your plans change'
    }
]

export interface DestinationsProps{
    imgUrl:any
    title:string
    location:string
    travlers:string
}

export const Destiantions:DestinationsProps[] = [
 {
  imgUrl:PrydeLand,
  title:'Pryde land',
  location:'Abuja,Nigeria',
  travlers:'230 wants to travel here'
 },

 {
  imgUrl:TajMahal,
  title:'Taj Mahal',
  location:'Uttar Pradesh, India',
  travlers:'280 wants to travel here'
 },
 {
  imgUrl:philpiness,
  title:'Palawan Island',
  location:'Philippines',
  travlers:'230 wants to travel here'
 },
 {
  imgUrl:EffielTower,
  title:'Eiffel Tower',
  location:'Paris, France',
  travlers:'500 wants to travel here'
 },
 {
  imgUrl:Bangladesh,
  title:"Bazar Sea Beach",
  location:'Bangladesh',
  travlers:'250 wants to travel here'
 },
 {
 imgUrl:KajuruCastel,
 title:'Kajuru Castle',
 location:'Kaduna, Nigeria',
 travlers:'400 wants to travel here'
 }
]

export interface JourneyCardProps {
    title: string;
    location: string;
    trips: string;
    imageUrl: string;
    span?:string
}

export const Journeyss:JourneyCardProps[] =[
    {
        title: 'Eiffel Tower',
        location: 'Paris',
        trips: '24 Trips',
        imageUrl: '/EiffelTower.png',
      },
      {
        title: 'Pryde Mountains',
        location: 'Prydlands',
        trips: '100 Trips',
        imageUrl: '/PrydeMountains.png',
        span: 'col-span-2', // Add this to make Pryde Mountains span larger
      },
      {
        title: 'Lao Lading Island',
        location: 'Krabi',
        trips: '12 Trips',
        imageUrl: '/Lao Lading Island.png',
      },
      {
        title: 'Ton Kwen Temple',
        location: 'Thailand',
        trips: '20 Trips',
        imageUrl: '/Ton Kwen Temple.png',
      },
      {
        title: 'Thailand',
        location: 'Thailand',
        trips: '50 Trips',
        imageUrl: '/Thailand.png',
      },
]


export interface TestimonialProps {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

export const testimonials: TestimonialProps[] = [
    {
        id: 1,
        name: "Victor",
        role: "Happy Traveler",
        content: "I had the most incredible vacation experience thanks to the amazing team at XYZ Travel Agency! From the moment I contacted them, their friendly and knowledgeable staff helped me plan the perfect itinerary. They took care of every detail, from booking flights and accommodations to arranging local tours and activities.",
        avatar: "/Klaus.png"
    },
    {
        id: 2,
        name: "Osinachi",
        role: "Adventure Seeker",
        content: "XYZ Travel Agency made my dream vacation a reality. Their attention to detail and personalized service exceeded all my expectations. I can't wait to book my next trip with them!",
        avatar: "/Osinachi.png"
    },
    {
        id: 3,
        name: "Nora Acholo",
        role: "Tripster",
        content: "As a frequent traveler, I've worked with many agencies, but XYZ Travel Agency stands out. Their expertise and dedication to customer satisfaction are unmatched. Highly recommended!",
        avatar: "/Nora Acholo.png"
    },
    {
        id: 4,
        name: "Klaus",
        role: "Family Vacationer",
        content: "Planning a family vacation can be stressful, but XYZ Travel Agency made it a breeze. They found activities that everyone loved, and their recommendations were spot-on. We'll definitely use their services again!",
        avatar: "/personTwo.png"
    },
    {
        id: 5,
        name: "Bryan",
        role: "Business Traveler",
        content: "XYZ Travel Agency has been invaluable for my business trips. Their efficient booking process and 24/7 support have saved me time and hassle. I wouldn't trust anyone else with my travel plans.",
        avatar: "/person.png"
    }
];