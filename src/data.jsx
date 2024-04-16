//skills images
import SkillImg1 from "./assets/images/skills/html5.png";
import SkillImg2 from "./assets/images/skills/css3.png";
import SkillImg3 from "./assets/images/skills/tailwindcss.png";
import SkillImg4 from "./assets/images/skills/js.png";
import SkillImg5 from "./assets/images/skills/nodejs.png";
import SkillImg6 from "./assets/images/skills/git.png";
import SkillImg7 from "./assets/images/skills/mysql.png";
import SkillImg8 from "./assets/images/skills/mongodb.png";
import SkillImg9 from "./assets/images/skills/reactjs.png";
import SkillImg10 from "./assets/images/skills/expressjs.png";
import SkillImg11 from "./assets/images/skills/mongoose.png";
import SkillImg12 from "./assets/images/skills/webpack.png";
import SkillImg13 from "./assets/images/skills/jest.png";
import SkillImg14 from "./assets/images/skills/postman.png";
import SkillImg15 from "./assets/images/skills/sequelize.png";
import SkillImg16 from "./assets/images/skills/graphql.png";
import SkillImg17 from "./assets/images/skills/jquery.png";

//project images
import ProjectImg1 from "./assets/images/projects/code-snippet-manager.png";
import ProjectImg2 from "./assets/images/projects/password-generator.png";
import ProjectImg3 from "./assets/images/projects/coding-quiz.png";
import ProjectImg4 from "./assets/images/projects/workday-scheduler.png";
import ProjectImg5 from "./assets/images/projects/workday-planner.png";
import ProjectImg6 from "./assets/images/projects/weather-dashboard.png";
import ProjectImg7 from "./assets/images/projects/the-university-of-gaming.png";
import ProjectImg8 from "./assets/images/projects/readme-generator.png";
import ProjectImg9 from "./assets/images/projects/logo-generator.png";
import ProjectImg10 from "./assets/images/projects/note-taker.png";
import ProjectImg11 from "./assets/images/projects/employee-tracker.png";
import ProjectImg12 from "./assets/images/projects/ecommerce-orm.png";
import ProjectImg13 from "./assets/images/projects/the-tech-blog.png";
import ProjectImg14 from "./assets/images/projects/lets-brag.png";
import ProjectImg15 from "./assets/images/projects/social-network-api.png";
import ProjectImg16 from "./assets/images/projects/pwa-text-editor.png";

//icons
import { FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";
import {FiMail, FiMapPin } from "react-icons/fi";

// navigation
export const navigation = [

  {
    name: "about me",
    href: "/",
  },
  {
    name: "portfolio",
    href: "/portfolio",
  },
  {
    name: "contact",
    href: "/contact",
  },
  {
    name: "resume",
    href: "/resume",
  },
];
// skill
export const skills = [
  {
    image: SkillImg1,
    name: "HTML5",
    tech: "frontend",
  },
  {
    image: SkillImg2,
    name: "CSS3",
    tech: "frontend",
  },
  {
    image: SkillImg3,
    name: "Tailwind CSS",
    tech: "frontend",
  },
  {
    image: SkillImg4,
    name: "JavaScript",
    tech: "frontend",
  },
  {
    image: SkillImg5,
    name: "NodeJS",
    tech: "backend",
  },
  {
    image: SkillImg6,
    name: "Git",
    tech: "neither",
  },
  {
    image: SkillImg7,
    name: "MySQL",
    tech: "backend",
  },
  {
    image: SkillImg8,
    name: "MongoDB",
    tech: "backend",
  },
  {
    image: SkillImg9,
    name: "ReactJS",
    tech: "backend",
  },
  {
    image: SkillImg10,  
    name: "ExpressJS",
    tech: "backend",
  }
  ,
  {
    image: SkillImg11,  
    name: "Mongoose",
    tech: "backend",
  },
  {
    image: SkillImg12,  
    name: "Webpack",
    tech: "neither",
  },
  {
    image: SkillImg13,  
    name: "Jest",
    tech: "neither",
  },
  {
    image: SkillImg14,  
    name: "Postman",
    tech: "neither",
  },
  {
    image: SkillImg15,  
    name: "Sequelize",
    tech: "backend",
  },
  {
    image: SkillImg16,  
    name: "GraphQL",
    tech: "backend",
  },
  {
    image: SkillImg17,  
    name: "jQuery",
    tech: "frontend",
  }
];

//project category
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Full Stack",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
];
//project data
export const projectsData = [
  {
    id: 0,
    name: "Code Snippet Manager",
    category: "Frontend",
    image: ProjectImg1,
    repo: "https://github.com/SimpleSuyash/code-snippet",
    live:"https://simplesuyash.github.io/code-snippet/",
    description: "A code snippet manager built using HTML, CSS",
  },
  {
    id: 1,
    name: "Password Generator",
    category: "Frontend",
    image: ProjectImg2,
    repo: " https://github.com/SimpleSuyash/password-generator/",
    live:"https://simplesuyash.github.io/password-generator/",
    description:
      "A simple password generator built using HTML, CSS, and JavaScript",
  },
  {
    id: 2,
    name: "Coding Quiz",
    category: "Frontend",
    image: ProjectImg3,
    repo: "https://github.com/SimpleSuyash/js-quiz",
    live:"https://simplesuyash.github.io/js-quiz/",
    description: "A coding quiz built using HTML, CSS, and JavaScript",
  },
  {
    id: 3,
    name: "Workday Scheduler",
    category: "Frontend",
    image: ProjectImg4,
    repo: "https://github.com/SimpleSuyash/work-day-scheduler/",
    live:"https://simplesuyash.github.io/work-day-scheduler/",
    description:
      "A simple workday scheduler built using HTML, CSS, and JavaScript",
  },
  {
    id: 4,
    name: "Workday Planner",
    category: "Frontend",
    image: ProjectImg5,
    repo: "https://github.com/SimpleSuyash/work-day-planner",
    live:"https://simplesuyash.github.io/work-day-planner/",
    description:
      "A simple workday scheduler built using HTML, CSS, and JavaScript",
  },
  {
    id: 5,
    name: "Weather Dashboard",
    category: "Frontend",
    image: ProjectImg6,
    repo: "https://github.com/SimpleSuyash/weather-dashboard",
    live:"https://simplesuyash.github.io/weather-dashboard/",
    description: "A weather app built using HTML, CSS, and JavaScript",
  },
  {
    id: 6,
    name: "The Universtiy of Gaming",
    category: "Frontend",
    image: ProjectImg7,
    repo: " https://github.com/Yukitoshi12345/The-University-of-Gaming",
    live:"https://yukitoshi12345.github.io/The-University-of-Gaming/",
    description: "A gaming website built using HTML, CSS, and JavaScript",
  },
  {
    id: 7,
    name: "Readme Generator",
    category: "Backend",
    image: ProjectImg8,
    repo: "https://github.com/SimpleSuyash/readme-generator",
    live: "",
    description: "A readme generator built using Node.js and Inquirer",
  },
  {
    id: 8,
    name: "Logo Generator",
    category: "Backend",
    image: ProjectImg9,
    repo: "https://github.com/SimpleSuyash/logo-generator",
    live: "",
    description:
      "A logo generator built using Node.js and Inquirer, and tested using Jest",
  },
  {
    id: 9,
    name: "Note Taker",
    category: "Backend",
    image: ProjectImg10,
    repo: "https://github.com/SimpleSuyash/note-taker",
    live:"https://simplesuyash-note-taker-b716f2594d24.herokuapp.com/",
    description: "A note taker built using Node.js and Express.js",
  },
  {
    id: 10,
    name: "Employee Tracker",
    category: "Backend",
    image: ProjectImg11,
    repo: "https://github.com/SimpleSuyash/employee-tracker",
    live:"",
    description: "An employee tracker built using Node.js, Inquirer and MySQL",
  },
  {
    id: 11,
    name: "E-commerce ORM",
    category: "Backend",
    image: ProjectImg12,
    repo: "https://github.com/SimpleSuyash/ecommerce-orm",
    live:"",
    description:
      "An e-commerce ORM built using Node.js, Express.js, MySQL, and Sequelize",
  },
  {
    id: 12,
    name: "The Tech Blog",
    category: "Full Stack",
    image: ProjectImg13,
    repo: "https://github.com/SimpleSuyash/the-tech-blog",
    live:"https://simplesuyash-tech-blog-97da35edb183.herokuapp.com/",
    description:
      "A tech blog built using Node.js, Express.js, MySQL, and Handlebars",
  },
  {
    id: 13,
    name: "Lets Brag",
    category: "Full Stack",
    image: ProjectImg14,
    repo: "https://github.com/Yukitoshi12345/Lets-Brag",
    live:"https://lets-brag-b258984e3793.herokuapp.com/",
    description:
      "A social media app built using Node.js, Express.js, MySQL, and Handlebars",
  },
  {
    id: 14,
    name: "Social Network API",
    category: "Backend",
    image: ProjectImg15,
    repo: "https://github.com/SimpleSuyash/social-network-api",
    live:"",
    description:
      "A social network API built using Node.js, Express.js, MongoDB and Mongoose",
  },
  {
    id: 15,
    name: "PWA Text Editor",
    category: "Backend",
    image: ProjectImg16,
    repo: "https://github.com/SimpleSuyash/PWA-text-editor",
    live:"https://pwa-text-editor-arc0.onrender.com/",
    description:
      "A PWA text editor built using Node.js, Express.js, IndexedDB, and Service Worker",
  },
];

export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "Please feel free to reach out to me",
    description: "Email me at suyash@mail.com"
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Sydney, Australia",
    description: "Ready to serve clients worldwide"
  }
];

export const socialIcons = [
  {
    icon: <FaGithub />,
    url: "https://github.com/SimpleSuyash"
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/suyash-maharjan-205044304/"
  },
  {
    icon: <FaStackOverflow />,
    url: "https://stackoverflow.com/users/24322095/suyash-maharjan"
  }
];