import React from 'react';
import Proyect from './Proyect';
import proyects from '../data/proyectsData';

const Work = () => {
  return (
    <section id='work'>
      <div className='container d-flex flex-column align-items-center'>
        <span className='display-3'>Work</span>
        <span className='h3 font-serif mb-5'>
          Some of my featured proyects.
        </span>
        <div className='row'>
          <div className='col-12 text-center'>
            {proyects.map((proy) => {
              const { id, title, img, text, links, tags } = proy;
              return (
                <Proyect
                  key={id}
                  data={{ id, title, img, text, links, tags }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
