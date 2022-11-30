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
import Project2 from './assets/img/projects/apple.jpg';
import Project3 from './assets/img/projects/sportify.png';


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
    action : 'Purchase',
    href: '/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Podcast',
    category: 'Apple',
    action : 'Listen',
    href: 'https://podcasts.apple.com/us/podcast/being-sharon-gibson/id1640467947',
  },
  {
    id: '3',
    image: Project3,
    name: 'Podcast',
    category: 'Sportify',
    action : 'Listen',
    href: '/',
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
    description: 'Email me at iamsharongibson@gmail.com ',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Europe',
    description: 'Serving clients worldwide',
  },
];
