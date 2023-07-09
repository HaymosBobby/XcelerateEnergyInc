import slider1 from "./img/hero-1.jpg";
import slider2 from "./img/hero-2.jpg";
import slider3 from "./img/hero-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faGlobe,
  //   faBoltLightning,
  //   faCubes,
  //   faFireFlameSimple,
  //   faFlask,
  //   faGears,
  //   faLeaf,
  //   faPeopleGroup,
  faUser,
  //   faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

import project1 from "./img/eco.jpeg";
import project2 from "./img/manufacturing.jpg";
import project3 from "./img/oil&gas.jpg";
import project4 from "./img/industry.jpg";
import project5 from "./img/factory.png";
// import project1 from "./img/project-img-1.jpg";
// import project2 from "./img/project-img-2.jpg";
// import project3 from "./img/project-img-3.jpg";
// import project4 from "./img/project-img-4.jpg";
// import project5 from "./img/project-img-5.jpg";
// import project6 from "./img/project-img-6.jpg";
// import project7 from "./img/project-img-7.jpg";
// import project8 from "./img/project-img-8.jpg";
// import project9 from "./img/project-img-9.jpg";
// import project10 from "./img/project-img-10.jpeg";
// import project11 from "./img/project-img-11.jpeg";
// import project12 from "./img/project-img-12.jpeg";

export const SliderItems = [
  {
    id: 1,
    title: "We are the world's largest corporation",
    desc: "We bring deep project management expertise to ensure on-time & on-budget delivery.",
    bg: "#b43b3f;",
    img: slider1,
  },
  {
    id: 2,
    title: "We provide pipeline solutions.",
    desc: "We offer a range of solutions tailored to meet your pipeline requirements.",
    bg: "#93282b",
    img: slider2,
  },
  {
    id: 3,
    title: "Trusted Oil and Gas Infrastructure",
    desc: "The integrity our services offer is never in doubt.",
    bg: "#1a2f80",
    img: slider3,
  },
];

export const GoalsData = [
  {
    id: 1,
    title: "Quality drive",
    desc: "The quality of the services we provide is central to everything we do",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
  {
    id: 2,
    title: "Customer focused",
    desc: "For every project, we make sure our clients are happy with the outcomes.",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    id: 3,
    title: "Global sourcing",
    desc: "We are making a concerted effort to expand our global reach.",
    icon: <FontAwesomeIcon icon={faGlobe} />,
  },
];

export const ProjectsData = [
  {
    id: 1,
    title: "Eco",
    img: project1,
  },
  {
    id: 2,
    title: "Manufacturing",
    img: project2,
  },
  {
    id: 3,
    title: "Oil & Gas",
    img: project3,
  },
  {
    id: 4,
    title: "Industy",
    img: project4,
  },
  {
    id: 5,
    title: "Factory",
    img: project5,
  },
];

// export const ServicesData = [
//   {
//     id: 1,
//     icon: <FontAwesomeIcon icon={faGears} />,
//     title: "Pipeline technology",
//     desc: "Design, construction & management of thousands of miles of transmission pipelines, gathering systems & flowlines.",
//   },
//   {
//     id: 2,
//     icon: <FontAwesomeIcon icon={faLeaf} />,
//     title: "Terminals & storage",
//     desc: "Tank farms, rail loading terminals, and export terminals, connecting transmission pipelines & gathering systems.",
//   },
//   {
//     id: 3,
//     icon: <FontAwesomeIcon icon={faFireFlameSimple} />,
//     title: "Offshore",
//     desc: "Offshore and subsea engineering services from flowlines to export terminals, spanning across the world.",
//   },
//   {
//     id: 4,
//     icon: <FontAwesomeIcon icon={faBoltLightning} />,
//     title: "Electric transmission",
//     desc: "Underground / linear electricity transmission lines: buried cable, insulated lines and tunnels.",
//   },
//   {
//     id: 5,
//     icon: <FontAwesomeIcon icon={faFlask} />,
//     title: "Renewables",
//     desc: "Renewable natural gas recovery, geothermal, wind and transmission systems.",
//   },
//   {
//     id: 6,
//     icon: <FontAwesomeIcon icon={faCubes} />,
//     title: "Facilities",
//     desc: "Meter stations, pump stations, terminals (tank, rail, truck, marine).",
//   },
// ];

// export const ProjectsData = [
//   {
//     id: 1,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project1,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 2,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project2,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 3,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project3,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 4,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project4,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 5,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project5,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 6,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project6,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 7,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project7,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 8,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project8,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 9,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project9,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 10,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project10,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 11,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project11,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
//   {
//     id: 12,
//     title: "Oil pipeline",
//     desc: "Gas",
//     img: project12,
//     date: "May 16, 2019",
//     categories: ["oil", "industry", "factory"],
//     client: "Rajkumar",
//     completed: "2019",
//     descOne:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     descTwo:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum, quia ab sed assumenda beatae, maiores officiis natus, recusandae deserunt id ad enim animi modi amet rem autem nulla et!",
//     location: "California",
//   },
// ];
