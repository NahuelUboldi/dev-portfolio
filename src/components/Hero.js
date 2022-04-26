import React from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';

function Hero() {
  return (
    <section
      id='hero'
      className='d-flex flex-column align-items-center justify-content-center'
    >
      <span className='display-3 text-center'>
        Unique Front-End Experiences
      </span>
      <h1 className='h1 font-serif fw-4 mb-5'>Ideas into code</h1>

      <p className='lead text-center'>
        Scroll down to see my work <br />
        <a className='common-link fs-1' href='#work'>
          <BsChevronCompactDown />
        </a>
      </p>
    </section>
  );
}

export default Hero;
