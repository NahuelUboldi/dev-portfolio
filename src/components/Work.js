import React from 'react';
import Proyect from './Proyect';
import ProyectThumb from './ProyectThumb';
import proyects from '../data/proyectsData';

const Work = ({ handleModal }) => {
  return (
    <section id='work'>
      <div className='container d-flex flex-column align-items-center'>
        <span className='display-3'>Work</span>
        <span className='subtitle h3 font-serif mb-5'>
          Some of my featured proyects.
        </span>
        <div className='row'>
          <div className='col-12 text-center'>
            {proyects.map((proy) => {
              const { id, img, title, type } = proy;
              return (
                <ProyectThumb
                  key={id}
                  id={id}
                  img={img}
                  title={title}
                  type={type}
                  handleModal={handleModal}
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
