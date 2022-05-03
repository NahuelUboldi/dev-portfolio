import React from 'react';
import { BsGithub, BsFilterCircleFill, BsYoutube } from 'react-icons/bs';
import ProjectLink from './micro/ProjectLink';

const Project = (props) => {
  const { title, type, img, text, links, tags } = props.data;
  return (
    <div className='project mb-5'>
      <img src={img.allDevices} alt={title} className='project-img mt-3' />
      <ul className='project-links'>
        {links.github && (
          <ProjectLink
            id='01'
            link={links.github}
            icon={<BsGithub />}
            text='Code Repo'
          />
        )}
        {links.live && (
          <ProjectLink
            id='02'
            link={links.live}
            icon={<BsFilterCircleFill />}
            text='Live Site'
          />
        )}
        {links.youtube && (
          <ProjectLink
            id='03'
            link={links.youtube}
            icon={<BsYoutube />}
            text='Video'
          />
        )}
      </ul>
      <div className='h1 mb-5 fw-bold'>{`${title} // ${type}`}</div>
      <div className='project-text font-sans'>
        {text.map((paragraph, index) => {
          return <p key={`p${index}`}>{paragraph}</p>;
        })}
      </div>
      <span className='fw-bold text-black-50'>Technologies used:</span>
      <ul className='project-tags'>
        {tags.map((tech, index) => {
          return <li key={`li${index}`}>{tech}</li>;
        })}
      </ul>
    </div>
  );
};

export default Project;
