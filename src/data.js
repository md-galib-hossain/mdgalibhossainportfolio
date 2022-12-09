// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaNode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiStyledcomponents,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import project1 from "./images/project1.jpg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "mdgalibhossain1";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and I liked to move with a team rather than individual. I built this site with React, Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },

  {
    id: 5,
    skill: <SiTailwindcss className="display-4" />,
    name: "Tailwind",
  },
  {
    id: 6,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <FaNode className="display-4" />,
    name: "Nodejs",
  },

  {
    id: 8,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 9,
    skill: <SiMongodb className="display-4" />,
    name: "Mongodb",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  "https://drive.google.com/file/d/1MFuYWaNpBJDZ994slnkcFj7fpHzb9zZP/view?usp=share_link";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/maykrlda";
