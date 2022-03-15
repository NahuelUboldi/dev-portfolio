import React from 'react';
import ProyectThumb from './ProyectThumb';
import proyects from '../data/proyectsData';
import SectionTitles from './micro/SectionTitles';

const Work = ({ handleModal }) => {
  return (
    <section id='work'>
      <div className='container d-flex flex-column align-items-center'>
        <SectionTitles
          title={'Work'}
          subtitle={'Some of my featured proyects.'}
        />

        <div className='row'>
          <div className='col-12 d-flex justify-content-center flex-wrap'>
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
