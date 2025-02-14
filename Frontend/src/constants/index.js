import {
  MIPS_schematic,
  Early_NART_UI,
  NART_WhiteUI,
  DAE_notebook,
} from "../assets";

const about_me = [
  {
    title: "Hi, I'm Ryan! I'm passionate about Web Dev, AI, and Electronics.",
    description: "I'm a fourth year Computer Science and Engineering student at UCI, an AI enthusiast, and an aspiring web developer. I'm currently doing AI research for the OctoPath Lab at UCI, where I collect data on the performance of whole-slide image classification models in Python. I love to learn new things and branch out my knowledge of technology. I'd love to find more opportunities for research and become a more experienced software and/or hardware developer."
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

const projects = [
  {
    project_page_link: "project-NART",
    title: "NART: The Petfinder Drone",
    card_summary:
      "Web app for communicating with petfinding drone.",
    full_summary:
      "Web interface for communicating with petfinding drone. Submit images of your pet, and the drone's onboard detection model will notify you of potential matches as it searches its proximity. The user needs to upload their pics to the app. The app sends the pics to the drone's onboard object detection model. The model will send a notification back to the web app when a potential match for the pet is found.",
    my_role:
      "I created the web app using Vite, React, and Bootstrap. I set up communications between the web app and drone using Python sockets and PyTorch functions.",
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
    card_summary:
      "A MIPS 32 processor designed in the Vivado Design Suite using Verilog code.",
    full_summary:
      "A MIPS 32 processor designed in the Vivado Design Suite using Verilog code. Interprets and executes assembly code. Comprised of 5 pipeline stages: instruction fetch (IF), instruction decode (ID), execute (EX), memory (MEM), and writeback (WB). Intermediary registers transfer data from one stage to the next at every clock cycle. Capable of hazard detection and resolution.",
    my_role:
      "I used my knowledge of computer architecture and the Verilog language to create processor components and registers. I tested all components using signal timelines in Vivado.",
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
    card_summary:
      "A denoising autoencoder designed to smooth time-series vehicle trajectory data.",
    full_summary:
      "A denoising autoencoder designed to smooth time-series vehicle trajectory data. Created for a research project at the UCI Institute of Transportation Studies in association with the AI Club at UCI.",
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

export { about_me, navLinks, projects };