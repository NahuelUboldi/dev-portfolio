import React from 'react';
import './logo-styles.css';

function Logo({ img, text }) {
  return (
    <div id='logo'>
      <img src={img} alt='' />
      <span>{text}</span>
    </div>
  );
}

export default Logo;
