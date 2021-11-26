import React from 'react'
import {AiFillHtml5 } from "react-icons/ai"
import {DiCss3,DiReact, DiSass,DiBootstrap,DiGit } from "react-icons/di"
import {SiJavascript,SiRedux } from "react-icons/si"


function Skills() {
 return (
  <section id="skills">
   <div className="container d-flex flex-column align-items-center">
    <span className="display-3">Skills</span>
    <div className="row align-self-stretch" style={{outline: "solid 1px red"}}>
     <div className="col-12 col-md-6">
      <p className="text-end">Developer skills and tools</p>
     </div>
     <div className="col-12 col-md-6">
      <div className="icons">
      <AiFillHtml5 />
      <DiCss3 />
      <SiJavascript />
      <DiReact />

      <DiSass />
      <DiBootstrap />
      <SiRedux />
      <DiGit />
      Gsap, SEO
      </div>
     </div>
    </div>
   </div>   
  </section>
 )
}

export default Skills
