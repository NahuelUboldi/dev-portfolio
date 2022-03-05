import React from 'react';

import SectionTitles from './micro/SectionTitles';

function About() {
  return (
    <section id='about'>
      <div className='container d-flex flex-column align-items-center'>
        <SectionTitles title={'About'} subtitle={'A brief introduction.'} />
        <p className='text-center'>
          My name is Nahuel Uboldi and I`m a front-end web developer and UI
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
      </div>
    </section>
  );
}

export default About;
