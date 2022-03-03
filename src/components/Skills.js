import React from 'react';
import logos from '../data/logosData';
import Logo from './micro/Logo';

function Skills() {
  const skillsThatIKnow = logos.filter((item) => item.doKnowIt === true);
  return (
    <section id='skills'>
      <div className='container d-flex flex-column align-items-center'>
        <span className='display-3'>Skills</span>
        <span className='h3 font-serif mb-5'>Developer skills and tools.</span>
        <div className='row'>
          <div className='col-12'>
            <div className='icons'>
              {skillsThatIKnow.map((item) => (
                <Logo key={item.title} img={item.logoImg} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
