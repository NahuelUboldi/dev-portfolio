import React from 'react'
import { BsChevronCompactDown } from 'react-icons/bs';

function Hero() {
 return (
  <section id="hero" className="d-flex flex-column align-items-center justify-content-center">
   <span className="display-1 ">Nahuel Uboldi</span>
   <h1 className="h1 font-serif fw-4">Front-end web developer</h1>
   <p className="lead text-center">Scroll down to see my work<br /> 
   <BsChevronCompactDown />
   </p>
  </section>
 )
}

export default Hero
