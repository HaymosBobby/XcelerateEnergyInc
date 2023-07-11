import slider1 from "./img/hero-1.jpg";
import slider2 from "./img/hero-2.jpg";
import slider3 from "./img/hero-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";

import pipeline from "./img/pipeline.png";
import terminal from "./img/terminal.png";
import offshore from "./img/offshore.png";
import electric from "./img/electric.png";
import renewables from "./img/renewables.png";
import facility from "./img/facility.png";

import project1 from "./img/eco.jpeg";
import project2 from "./img/manufacturing.jpg";
import project3 from "./img/oil&gas.jpg";
import project4 from "./img/industry.jpg";
import project5 from "./img/factory.png";

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

export const ServicesData = [
  {
    id: 1,
    icon: pipeline,
    title: "Pipeline technology",
    desc: "Design, construction & management of thousands of miles of transmission pipelines, gathering systems & flowlines.",
  },
  {
    id: 2,
    icon: terminal,
    title: "Terminals & storage",
    desc: "Tank farms, rail loading terminals, and export terminals, connecting transmission pipelines & gathering systems.",
  },
  {
    id: 3,
    icon: offshore,
    title: "Offshore",
    desc: "Offshore and subsea engineering services from flowlines to export terminals, spanning across the world.",
  },
  {
    id: 4,
    icon: electric,
    title: "Electric transmission",
    desc: "Underground / linear electricity transmission lines: buried cable, insulated lines and tunnels.",
  },
  {
    id: 5,
    icon: renewables,
    title: "Renewables",
    desc: "Renewable natural gas recovery, geothermal, wind and transmission systems.",
  },
  {
    id: 6,
    icon: facility,
    title: "Facilities",
    desc: "Meter stations, pump stations, terminals (tank, rail, truck, marine).",
  },
];
