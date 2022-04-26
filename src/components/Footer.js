import React from 'react';
import Email from './micro/Email';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section id='footer' className='pt-5 pb-3'>
      <div className='container text-center'>
        Nahuel Uboldi | {<Email />} | {date} |
        <a
          className='common-link mx-1'
          href='https://github.com/NahuelUboldi'
          target={'_blank'}
          rel='nofollow noreferrer noopener'
        >
          <BsGithub />
        </a>
        <a
          className='common-link mx-1'
          href='https://www.linkedin.com/in/nahuel-uboldi-15845ba6/'
          target={'_blank'}
          rel='nofollow noreferrer noopener'
        >
          <BsLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Footer;
