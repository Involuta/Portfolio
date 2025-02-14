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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  profile_pic,
  threejs,
  MIPS_schematic,
  Early_NART_UI,
  NART_WhiteUI,
  DAE_notebook,
} from "../assets";

const about_me = [
  {
    title: "Hi, I'm Ryan! I'm passionate about Web Dev, AI, and Electronics.",
    description: "I'm a Computer Science and Engineering student at UCI and an aspiring web developer. I'd love to find more opportunities for software and/or hardware development."
  }
]

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "random-image",
    title: "Random Image",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    project_page_link: "project-NART",
    title: "NART: The Petfinder Drone",
    summary:
      "Web interface for communicating with petfinding drone. Submit images of your pet, and the drone's onboard detection model will notify you of potential matches as it searches its proximity. The user needs to upload their pics to the app. The app sends the pics to the drone's onboard object detection model. The model will send a notification back to the web app when a potential match for the pet is found.",
    my_role:
      "I created the web app and set up communications between the web app and drone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: NART_WhiteUI,
    source_code_link: "https://github.com/TanveenBal/NART",
  },
  {
    project_page_link: "project-MIPS",
    title: "MIPS 32 Pipelined Processor",
    summary:
      "A MIPS 32 processor designed in the Vivado Design Suite using Verilog code.",
    my_role:
      "I wrote all code and tested all components using signal timelines in Vivado.",
    tags: [
      {
        name: "verilog",
        color: "blue-text-gradient",
      },
      {
        name: "vivado",
        color: "green-text-gradient",
      },
      {
        name: "computer-architecture",
        color: "pink-text-gradient",
      },
    ],
    image: MIPS_schematic,
    source_code_link: "https://github.com/",
  },
  {
    project_page_link: "project-DAE",
    title: "Denoising Autoencoder for Vehicle Trajectory Data",
    summary:
      "A denoising autoencoder designed to smooth time-series vehicle trajectory data.",
    my_role:
      "I created the model using PyTorch and displayed its results using matplotlib graphs and Google Colab notebooks.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "colab-notebooks",
        color: "green-text-gradient",
      },
      {
        name: "data-processing",
        color: "pink-text-gradient",
      },
    ],
    image: DAE_notebook,
    source_code_link: "https://github.com/",
  },
];

export { about_me, navLinks, services, technologies, experiences, testimonials, projects };