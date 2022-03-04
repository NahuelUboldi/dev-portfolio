import React from 'react';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
      <div className='container-fluid'>
        <a className='navbar-brand fw-bolder' href='#'>
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
          <ul className='navbar-nav ms-auto'>
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
              <a className='nav-link' href='#'>
                <span>Resume</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
