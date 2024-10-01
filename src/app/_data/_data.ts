import { TDestination } from "../_type/_type";

export const technologies = [
  {
    id: 1,
    image: "/assets/technology/image-launch-vehicle-portrait.jpg",
    name: "Launch vehicle",
    desc: "A launch vehicle of carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    image: "/assets/technology/image-spaceport-portrait.jpg",
    name: "Spaceport",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  },
  {
    id: 3,
    image: "/assets/technology/image-space-capsule-portrait.jpg",
    name: "Space Capsule",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export const destinations:TDestination[] = [
  {
    id:1,
    name: "Moon",
    image: "/assets/destination/image-moon.png",
    desc: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    averageDistance: "384400 km",
    estimateTravelTime: "3 days",
  },
  {
    id:2,
    name: "Mars",
    image: "/assets/destination/image-mars.png",
    desc: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    averageDistance: "225 mil. km",
    estimateTravelTime: "9 months",
  },
  {
    id:3,
    name: "Europa",
    image: "/assets/destination/image-europa.png",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug winter cabin.",
    averageDistance: "628 mil. km",
    estimateTravelTime: "3 years",
  },
  {
    id:4,
    name: "Titan",
    image: "/assets/destination/image-titan.png",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. ",
    averageDistance: "1.6 bil. km",
    estimateTravelTime: "7 years",
  },
];

export const crews = [
  {
    id:1,
    role: "Commander",
    name: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2 ",
    image: "/assets/crew/image-douglas-hurley.png",
  },
  {
    id:2,
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system, Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/assets/crew/image-mark-shuttleworth.png",
  },
  {
    id:3,
    role: "Pilot",
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64. and served as a station systems flight engineer. ",
    image: "/assets/crew/image-victor-glover.png",
  },
  {
    id:4,
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranien American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    image: "/assets/crew/image-anousheh-ansari.png",
  },
];
