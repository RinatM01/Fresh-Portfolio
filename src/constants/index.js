import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  galigo,
  premium,
  ync,
  reactColors,
  portfolio,
  patatap,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  // 	id: 'contact',
  // 	title: 'Contact'
  // }
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Digital Art",
    icon: creator,
  },
  {
    title: "Photography",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  //   {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  //   {
  //     name: "figma",
  //     icon: figma,
  //   },
  //   {
  //     name: "docker",
  //     icon: docker,
  //   },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Yale-NUS College",
    icon: ync,
    iconBg: "#fff",
    date: "July 2022 - December 2022",
    points: [
      "Devised the code for simulating virus molecule movement in a water environment in python with OpenMM library.",
      "Used Fields (math) and programming techniques like parallel computing to further optimize the code.",
      "Worked in interdisciplinary team (mathematics, chemistry, computer science) to develop a detailed model",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Galigo",
    icon: galigo,
    iconBg: "#fff",
    date: "May 2021 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Designed and created the landing page to attract investors",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack Developer Intern",
    company_name: "Premium Digital",
    icon: premium,
    iconBg: "#fff",
    date: "Febuary 2018 - May 2018",
    points: [
      "Developed an ecommerce platform with MERN stack (MongoDB, Express.js, React and Node.js)",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "React Color Palettes",
    description:
      "Web application that allows users to design their custom color palettes and save them for easy quick copy later.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next-js",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: reactColors,
    source_code_link:
      "https://react-colors-j9zshny5j-rinatm01.vercel.app/",
  },
  {
    name: "My Portfolio",
    description:
      "This Portfolio was built and deployed with React on Vite. It uses modern front-end libraries like Three.js, Framer Motion and Tailwind CSS to create stunnig aesthetics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "green-text-gradient",
      },
      {
        name: "three-js",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "color-purple-500",
      },
    ],
    image: portfolio,
    source_code_link: "",
  },
  {
    name: "Patatap Clone",
    description:
      "'Patatap' is existing web app that plays flashy animations and sounds on each key press. In this project I tried to replicate the same experience with my knowledge of vanialla JavaScript. I used Paper.js library to create animated circles on black canvas and Howler.js to play different sound for each different key press. To try this project simply press any keys on your keyboard.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "paper-js",
        color: "green-text-gradient",
      },
      {
        name: "howler-js",
        color: "pink-text-gradient",
      },
    ],
    image: patatap,
    source_code_link:
      "https://rinatm01.github.io/Patatap-Clone/Circles.html",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
