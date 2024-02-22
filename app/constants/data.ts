import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
    aboutMe: {
        title: 'About Me',
        texts: [
            'Specializing in Front-End, my passion lies in Full Stack Development. I like building apps with modern technologies focusing on writing clean and efficient code.',
            ' I am a self-taught programmer, tech enthusiast and web developer. I am a fast learner and curious about new techs advancement.',
        ],
    },
    socialNetworks: [
        {
            link: 'mailto:kim.nawin@gmail.com',
            icon: faEnvelope,
        },
        {
            link: 'https://github.com/nwkm',
            icon: faGithub,
        },
        {
            link: 'https://www.linkedin.com/in/nawin-kim',
            icon: faLinkedin,
        },
    ],
    navLinks: [
        {
            title: 'About',
            path: '#about',
        },
        {
            title: 'Skills',
            path: '#skills',
        },
        {
            title: 'Projects',
            path: '#projects',
        },
        {
            title: 'Experiences',
            path: '#experiences',
        },
    ],
    skills: [
        {
            title: 'Web Dev',
            details: [
                'Javascript',
                'Typescript',
                'Python',
                'Java',
                'HTML',
                'CSS & SCSS',
            ],
        },
        {
            title: 'Frameworks & Libraries',
            details: ['Next', 'React', 'Node', 'Material', 'Tailwind'],
        },
        {
            title: 'Databases',
            details: ['MongoDB', 'Mysql', 'Postgresql'],
        },
        {
            title: 'DevOps & Tools',
            details: ['Git', 'AWS', 'Docker', 'VSCode', 'Neovim'],
        },
    ],
    projects: [
        {
            title: 'EEH',
            description:
                'An iOS app where users can manage their tasks by following Eisenhower matrix method',
            development: 'MVVM, RxSwift, Firebase',
            link: 'https://github.com/nwkm/EEH',
            icon: 'https://www.wappalyzer.com/images/icons/Firebase.svg',
        },
        {
            title: 'PikaRide',
            description:
                'A hybrid mobile app developed which allows user to locate cars for desired destination.',
            development: 'Ionic 4, Cordova, Firebase',
            link: 'https://github.com/nwkm/pikaride',
            icon: 'https://www.wappalyzer.com/images/icons/Ionic.svg',
        },
        {
            title: 'NightSam',
            description:
                'A full stack development for cross-platform apps where users can find nearest night clubs',
            development:
                'NodeJS, ExpressJS, MongoDB, Angular 4, Docker Compose',
            icon: 'https://www.wappalyzer.com/images/icons/Angular.svg',
        },
    ],
    experiences: [
        {
            title: 'Full Stack Developer',
            place: 'Altavia Connect, Saint Ouen',
            date: '2020 - 2023',
            bullets: [
                'Develop a web app from scratch for product orders & planning',
                'Maintain CI/CD for new app features',
                'Mentor junior devs',
            ],
        },
        {
            title: 'Full Stack Developer',
            place: 'Uppli SAS, PARIS',
            date: '2018 - 2020',
            bullets: [
                'Build a website for energy subscription',
                'Develop a website for client space dashboard',
                'Create a website for client payment',
                'Participate in app development for taxi order at CDG airport',
                'Mentor junior devs on all technical content in various projects',
            ],
        },
        {
            title: 'Front-End Intern',
            place: 'Uppli SAS, PARIS',
            date: '2017 - 2018',
            bullets: [
                'Develop and stabilize cross-platform app for social meeting using React Native',
                'Build a geolocalisation app using bridge between React Native and Swift',
                'Develop an iOS app for taxis and VTC',
                'Start a web development for energy subscription',
                'Renew the official website of Uppli',
            ],
        },
        {
            title: 'Mobile Dev Intern',
            place: 'Mapicts, NANCY',
            date: '2016',
            bullets: [
                'Build an native iOS app for an event notification project',
                'Prototype a cross-platform app using Ionic and AngularJS',
            ],
        },
        {
            title: 'Software Intern',
            place: 'Opinel, CHAMBÉRY',
            date: '2014',
            bullets: [
                'Create an interface between CRM Pivotal and ERP Sylob (Both are commercial app)',
                'Participate in networking installation in industry',
            ],
        },
    ],
};
