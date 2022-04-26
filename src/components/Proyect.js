import React from 'react';
import { BsGithub, BsFilterCircleFill, BsYoutube } from 'react-icons/bs';
import ProyectLink from './micro/ProyectLink';

const Proyect = (props) => {
  const { title, type, img, text, links, tags } = props.data;
  return (
    <div className='proyect mb-5'>
      <img src={img.allDevices} alt={title} className='proyect-img mt-3' />
      <ul className='proyect-links'>
        {links.github && (
          <ProyectLink
            id='01'
            link={links.github}
            icon={<BsGithub />}
            text='Code Repo'
          />
        )}
        {links.live && (
          <ProyectLink
            id='02'
            link={links.live}
            icon={<BsFilterCircleFill />}
            text='Live Site'
          />
        )}
        {links.youtube && (
          <ProyectLink
            id='03'
            link={links.youtube}
            icon={<BsYoutube />}
            text='Video'
          />
        )}
      </ul>
      <div className='h1 mb-5 fw-bold'>{`${title} // ${type}`}</div>
      <div className='proyect-text font-sans'>
        {text.map((paragraph, index) => {
          return <p key={`p${index}`}>{paragraph}</p>;
        })}
      </div>
      <span className='fw-bold text-black-50'>Technologies used:</span>
      <ul className='proyect-tags'>
        {tags.map((tech, index) => {
          return <li key={`li${index}`}>{tech}</li>;
        })}
      </ul>
    </div>
  );
};

export default Proyect;
