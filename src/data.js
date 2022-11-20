//  icons
import {
  FiYoutube,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin
} from 'react-icons/fi';



// projects images
import Project1 from './assets/img/projects/mind.jpg';
import Project2 from './assets/img/projects/p1.webp';


// navigation
export const navigation = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'portfolio',
    href: '/work',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/@iamsharongibson',
  },
  {
    icon: <FiInstagram />,
    href: 'https://instagram.com/iamsharongibson?igshid=YmMyMTA2M2Y=',
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/iamsharongibson',
  },
  {
    icon: <FiLinkedin/>,
    href: 'https://www.linkedin.com/in/iamsharongibson',
  },


];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Mind Simulating Poem',
    category: 'Book',
    action : 'Purchase'
  },
  {
    id: '2',
    image: Project2,
    name: 'Podcast',
    category: 'Podcast',
    action : 'Listen'
  },
 
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Book',
  },
  {
    name: 'Podcast',
  },
  {
    name: 'branding',
  },
];







// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at ebelegibson@gmail.com ',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Europe',
    description: 'Serving clients worldwide',
  },
];
