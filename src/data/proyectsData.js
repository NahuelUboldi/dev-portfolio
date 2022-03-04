const proyects = [
  {
    id: '01',
    title: 'Detrás del armario',
    type: 'React App',
    img: './img/proyects/detras-del-armario.png',
    text: [
      'This is a React app made in colaboration with the argentinian writer Sofía Contreras Canard.',
      'The app was selected one of the 40 finalist of over 4500 participants in the 2020 Digital Stories Contest by Itaú Fundation. It has also been declared a initiative of cultural interest by the city council of Anisacate in 2021.',
      'It recreates a story writed by Sofía utilizing data provided by the user in an interactive way.',
    ],
    links: {
      github: 'https://github.com/NahuelUboldi/detras-del-armario',
      live: 'https://sofiacanard.com/cuentodigital/',
      youtube: '',
    },
    tags: ['React', 'Framer Motion', 'Bootstrap', 'Css'],
  },
  {
    id: '02',
    title: 'El Obraje Colaborar',
    type: 'Landing Page',
    img: './img/proyects/obraje-colaborar.png',
    text: [
      'This is a foundraiser landing page for an educational institution that is currently building new facilities in its campus.',
      'The web is build in Html and Javascript. It utilizes the Bootstrap css framework with some customizations made with sass for the styling. It also has some scroll triggered animations made with the Gsap library.',
    ],
    links: {
      github: '',
      live: 'https://www.elobraje.edu.ar/colaborar/',
      youtube: '',
    },
    tags: ['Html', 'Sass', 'Javascript', 'Bootstrap', 'Gsap'],
  },
];

export default proyects;
