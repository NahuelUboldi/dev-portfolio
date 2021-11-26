import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

function Header() {
 return (
  <section id="header">
   <div className="container">
    <Navbar />
    <Hero />
   </div>   
  </section>
 )
}

export default Header
