import React from 'react';
import bananaImg from "../img/bg/banana.png"
import CallToActionBtn from './micro/CallToActionBtn';
const style = {
  maxHeight:"50vh",
  maxWidth:"100%",
  marginTop:"-5rem",
  zIndex:"-1",
  opacity:1
}

function Hero() {
  return (
    <section
      id='hero'
      className='d-flex flex-column align-items-center justify-content-center'
    >
      <img src={bananaImg} alt="" style={style} className="" />
      <span className='display-4 text-center mt-5 mb-2'>
        Unique Front-End Experiences
      </span>
      <h1 className='h3 fw-lighter mb-4 font-serif'>Great ideas into code</h1>

      <div className="mb-2 d-flex flex-column flex-sm-row">
        <CallToActionBtn text="See my work" href="#work" targetBlank={false} secondary={false} />
        <CallToActionBtn text="Contact me" href="#contact" targetBlank={false} secondary={true} />
      </div>

    </section>
  );
}

export default Hero;
