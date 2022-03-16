import React from 'react';
import './logo-styles.css';

function Logo({ img, text }) {
  return (
    <div className='logo'>
      <img src={img} alt='' />
      <span>{text}</span>
    </div>
  );
}

export default Logo;
