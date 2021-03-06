import React from 'react';
import ProjectThumb from './ProjectThumb';
import projects from '../data/projectsData';
import SectionTitles from './micro/SectionTitles';

const Work = ({ handleModal }) => {
  return (
    <section id='work'>
      <div className='container d-flex flex-column align-items-center'>
        <SectionTitles
          title={'Work'}
          subtitle={'Some of my featured projects.'}
        />

        <div className='row'>
          <div className='col-12 d-flex justify-content-center flex-wrap'>
            {projects.map((proy) => {
              const { id, img, title, type } = proy;
              return (
                <ProjectThumb
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
