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
import { FaGithub} from "react-icons/fa";
import {FiMail, FiMapPin } from "react-icons/fi";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
  {
    name: "resume",
    href: "resume",
  },
];
// skill
export const skills = [
  {
    image: SkillImg1,
    name: "HTML5",
  },
  {
    image: SkillImg2,
    name: "CSS3",
  },
  {
    image: SkillImg3,
    name: "Tailwind CSS",
  },
  {
    image: SkillImg4,
    name: "JavaScript",
  },
  {
    image: SkillImg5,
    name: "Node.js",
  },
  {
    image: SkillImg6,
    name: "Git",
  },
  {
    image: SkillImg7,
    name: "MySQL",
  },
  {
    image: SkillImg8,
    name: "MongoDB",
  },
  {
    image: SkillImg9,
    name: "React.js",
  },
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
    link: "https://simplesuyash.github.io/code-snippet/",
    description: "A code snippet manager built using HTML, CSS",
  },
  {
    id: 1,
    name: "Password Generator",
    category: "Frontend",
    image: ProjectImg2,
    link: " https://github.com/SimpleSuyash/password-generator/",
    description:
      "A simple password generator built using HTML, CSS, and JavaScript",
  },
  {
    id: 2,
    name: "Coding Quiz",
    category: "Frontend",
    image: ProjectImg3,
    link: "https://github.com/SimpleSuyash/js-quiz",
    description: "A coding quiz built using HTML, CSS, and JavaScript",
  },
  {
    id: 3,
    name: "Workday Scheduler",
    category: "Frontend",
    image: ProjectImg4,
    link: "https://github.com/SimpleSuyash/work-day-scheduler/",
    description:
      "A simple workday scheduler built using HTML, CSS, and JavaScript",
  },
  {
    id: 4,
    name: "Workday Planner",
    category: "Frontend",
    image: ProjectImg5,
    link: "https://github.com/SimpleSuyash/work-day-planner",
    description:
      "A simple workday scheduler built using HTML, CSS, and JavaScript",
  },
  {
    id: 5,
    name: "Weather Dashboard",
    category: "Frontend",
    image: ProjectImg6,
    link: " https://github.com/SimpleSuyash/weather-dashboard",
    description: "A weather app built using HTML, CSS, and JavaScript",
  },
  {
    id: 6,
    name: "The Universtiy of Gaming",
    category: "Frontend",
    image: ProjectImg7,
    link: " https://github.com/Yukitoshi12345/The-University-of-Gaming",
    description: "A gaming website built using HTML, CSS, and JavaScript",
  },
  {
    id: 7,
    name: "Readme Generator",
    category: "Backend",
    image: ProjectImg8,
    link: "https://github.com/SimpleSuyash/readme-generator",
    description: "A readme generator built using Node.js and Inquirer",
  },
  {
    id: 8,
    name: "Logo Generator",
    category: "Backend",
    image: ProjectImg9,
    link: "https://github.com/SimpleSuyash/logo-generator",
    description:
      "A logo generator built using Node.js and Inquirer, and tested using Jest",
  },
  {
    id: 9,
    name: "Note Taker",
    category: "Backend",
    image: ProjectImg10,
    link: "https://github.com/SimpleSuyash/note-taker",
    description: "A note taker built using Node.js and Express.js",
  },
  {
    id: 10,
    name: "Employee Tracker",
    category: "Backend",
    image: ProjectImg11,
    link: "https://github.com/SimpleSuyash/employee-tracker",
    description: "An employee tracker built using Node.js, Inquirer and MySQL",
  },
  {
    id: 11,
    name: "E-commerce ORM",
    category: "Backend",
    image: ProjectImg12,
    link: "https://github.com/SimpleSuyash/ecommerce-orm",
    description:
      "An e-commerce ORM built using Node.js, Express.js, MySQL, and Sequelize",
  },
  {
    id: 12,
    name: "The Tech Blog",
    category: "Full Stack",
    image: ProjectImg13,
    link: "https://github.com/SimpleSuyash/the-tech-blog",
    description:
      "A tech blog built using Node.js, Express.js, MySQL, and Handlebars",
  },
  {
    id: 13,
    name: "Lets Brag",
    category: "Full Stack",
    image: ProjectImg14,
    link: "https://github.com/Yukitoshi12345/Lets-Brag",
    description:
      "A social media app built using Node.js, Express.js, MySQL, and Handlebars",
  },
  {
    id: 14,
    name: "Social Network API",
    category: "Backend",
    image: ProjectImg15,
    link: "https://github.com/SimpleSuyash/social-network-api",
    description:
      "A social network API built using Node.js, Express.js, MongoDB and Mongoose",
  },
  {
    id: 15,
    name: "PWA Text Editor",
    category: "Backend",
    image: ProjectImg16,
    link: "https://github.com/SimpleSuyash/PWA-text-editor",
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
