import React from 'react';
import { BsGithub, BsFilterCircleFill, BsYoutube } from 'react-icons/bs';
import ProyectLink from './micro/ProyectLink';

const Proyect = (props) => {
  const { id, title, type, img, text, links, tags } = props.data;
  return (
    <div className='proyect mb-5'>
      <img src={img} alt={title} className='proyect-img mt-3' />
      <ul className='proyect-links'>
        {links.github && (
          <ProyectLink
            link={links.github}
            icon={<BsGithub />}
            text='Code Repo'
          />
        )}
        {links.live && (
          <ProyectLink
            link={links.live}
            icon={<BsFilterCircleFill />}
            text='Live Site'
          />
        )}
        {links.youtube && (
          <ProyectLink link={links.youtube} icon={<BsYoutube />} text='Video' />
        )}
      </ul>
      <div className='h2 fw-bold font-sans'>{`${title} // ${type}`}</div>
      <div className='proyect-text'>
        {text.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </div>
      <span className='fw-bold text-black-50'>Technologies used:</span>
      <ul className='proyect-tags'>
        {tags.map((tech) => {
          return <li>{tech}</li>;
        })}
      </ul>
    </div>
  );
};

export default Proyect;
