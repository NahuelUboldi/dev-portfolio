import React from 'react';
import bananaImg from '../img/bg/banana.png';
import camelImg from '../img/bg/camel2.png';

import CallToActionBtn from './micro/CallToActionBtn';
const style = {
  maxHeight: '50vh',
  maxWidth: '100%',
  marginTop: '0rem',
  zIndex: '-1',
  opacity: 1,
};

function Hero() {
  return (
    <section
      id='hero'
      className='d-flex flex-column align-items-center justify-content-center'
    >
      <img src={camelImg} alt='Front-end developer' style={style} className='' />
      <h1 className='h3 fw-lighter  font-serif mt-5'>Coding ideas into</h1>
      <span className='display-4 text-center mb-3'>
        Unique Front-End Experiences
      </span>

      <div className='mb-2 d-flex flex-column mt-2 flex-sm-row'>
        <CallToActionBtn
          text='See my work'
          href='#work'
          targetBlank={false}
          secondary={false}
        />
        <CallToActionBtn
          text='Contact me'
          href='#contact'
          targetBlank={false}
          secondary={true}
        />
      </div>
    </section>
  );
}

export default Hero;
