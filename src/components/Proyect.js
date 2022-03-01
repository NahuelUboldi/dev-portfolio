import React from 'react';
import proyectImg from '../img/proyects/detras-del-armario.png';
import { BsGithub, BsFilterCircleFill } from 'react-icons/bs';

const Proyect = (props) => {
  console.log('PROPS', props.data);
  const { id, title, img, text, links, tags } = props.data;
  console.log('PROYECTO', id, title, img, text, links, tags);
  return (
    <>
      <img src={img} alt={title} className='proyect-img mt-5' />
      <ul className='proyect-links'>
        <li>
          <a
            href={links.github}
            target={'_blank'}
            rel='nofollow noreferrer noopener'
          >
            <span className='fs-3 mx-2'>
              <BsGithub />
            </span>
            <span className='mx-2'> Code Repo</span>
          </a>
        </li>

        <li>
          <a
            href={links.live}
            target={'_blank'}
            rel='nofollow noreferrer noopener'
          >
            <span className='fs-3 mx-2'>
              <BsFilterCircleFill />
            </span>
            <span className='mx-2'>Live Site</span>
          </a>
        </li>
      </ul>
      <div className='h2 fw-bold font-sans'>{title}</div>
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
    </>
  );
};

export default Proyect;
