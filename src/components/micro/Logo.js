import React from 'react';
import './logo-styles.css';

const keywords = ["software engineer skills", "web developer tools", "front end developer abilities", "computer science knowledge","tech stack","technologies used","framework logo", "web designer","backend developer","frontend developer"]


function Logo({ img, text }) {
  const randomNum = () => Math.floor(Math.random() * keywords.length)
  console.log(randomNum());
  return (
    <div className='logo'>
      <img src={img} alt={keywords[randomNum()]} loading='lazy' />
      <span>{text}</span>
    </div>
  );
}

export default Logo;
