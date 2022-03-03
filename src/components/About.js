import React from 'react';

function About() {
  return (
    <section id='about'>
      <div className='container d-flex flex-column align-items-center'>
        <span className='display-3'>About</span>
                <span className='h3 font-serif mb-5'>
          A brief introduction.
        </span>
        <p className='text-center'>
          My name is Nahuel Uboldi and i`m a front end web developer and ui
          designer.
        </p>
        <p className='text-center'>
          My goal is to create beautiful, responsive and functional websites
          that solve real needs for my clients.
        </p>
        <p className='text-center'>
          "I create successful websites that are fast, easy to use, and built
          with best practices. " from https://ianlunn.co.uk/contact
        </p>
      </div>
    </section>
  );
}

export default About;
