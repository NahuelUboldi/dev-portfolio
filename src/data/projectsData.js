const projects = [
  {
    id: '01',
    title: 'Detrás del armario',
    type: 'React App',
    img: {
      screenShot: 'img/projects/detras-del-armario.png',
      allDevices: "img/projects/detras-del-armario/all-devices.png",
      threeDevices:"img/projects/detras-del-armario/3-devices.png",
      desktop:"img/projects/detras-del-armario/desktop.png",
      laptop:"img/projects/detras-del-armario/laptop.png",
      tablet:"img/projects/detras-del-armario/tablet.png",
      mobile:"img/projects/detras-del-armario/mobile.png"
    },
    text: [
      'This is a React app made in collaboration with the argentinian writer Sofía Contreras Canard.',
      'The app was selected as one of the 40 finalists of over 4500 participants in the 2020 Digital Stories Contest by Itaú Foundation. It has also been declared an initiative of cultural interest by the city council of Anisacate in 2021.',
      'It recreates a story written by Sofía utilizing data interactively provided by the user.',
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
        img: {
      screenShot: './img/projects/obraje-colaborar.png',
      allDevices: "./img/projects/obraje-colaborar/all-devices.png",
      threeDevices:"./img/projects/obraje-colaborar/3-devices.png",
      desktop:"./img/projects/obraje-colaborar/desktop.png",
      laptop:"./img/projects/obraje-colaborar/laptop.png",
      tablet:"./img/projects/obraje-colaborar/tablet.png",
      mobile:"./img/projects/obraje-colaborar/mobile.png"
    },

    text: [
      'This is a fundraiser landing page for an educational institution that is currently building new facilities on its campus.',
      'The web is built in Html and Javascript. It utilizes the Bootstrap CSS framework with some customizations made with Sass for the styling. It also has some scroll-triggered animations made with the Gsap library.',
    ],
    links: {
      github: 'https://github.com/NahuelUboldi/obraje-colaborar',
      live: 'https://www.elobraje.edu.ar/colaborar/',
      youtube: '',
    },
    tags: ['Html', 'Sass', 'Javascript', 'Bootstrap', 'Gsap'],
  }
];

export default projects;
