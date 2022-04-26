import React from 'react';
import resume from '../files/cv-nahuel-uboldi-2022.pdf';
import CallToActionBtn from './micro/CallToActionBtn';

import SectionTitles from './micro/SectionTitles';

function About() {
  return (
    <section id='about'>
      <div className='container d-flex flex-column align-items-center fs-6 font-sans'>
        <SectionTitles title={'About'} subtitle={'A brief introduction.'} />
        <p className='text-center'>
          My name is Nahuel Uboldi and I'm a Front-End web developer and an UI
          designer.
        </p>
        <p className='text-center'>
          My goal is to create beautiful, responsive, and built with best
          practices websites that solve real needs for my clients.
        </p>
        <p className='text-center'>
          I also have a bachelor's degree in communication science and have
          worked with several companies in the field. This experience allowed me
          to participate in all the aspects of web development: from the general
          idea, content creation, SEO optimization, graphic design, deployment
          and, of course, coding the site.
        </p>
        <p>Wanna know more about me?</p>
        <CallToActionBtn text="Check out my Resume" href={resume} targetBlank={true} secondary={false} />
      
      </div>
    </section>
  );
}

export default About;
