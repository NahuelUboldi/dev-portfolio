import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
      <div className='container-fluid'>
        <a className='navbar-brand fw-bolder' href='#header'>
          {'<NahuelUboldi />'}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#about'>
                <span>About</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#skills'>
                <span>Skills</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#work'>
                <span>Work</span>
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <a
            className='common-link fs-4 mx-2'
            href='https://github.com/NahuelUboldi'
            target={'_blank'}
            rel='nofollow noreferrer noopener'
          >
            <span class="hide-text-link">Github</span>
            <BsGithub />
          </a>
          <a
            className='common-link fs-4 mx-2'
            href='https://www.linkedin.com/in/nahuel-uboldi-15845ba6/'
            target={'_blank'}
            rel='nofollow noreferrer noopener'
          >
            <span class="hide-text-link">Linkedin</span>
            <BsLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
