import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

function Header() {
 return (
  <header id="header">
   <div className="container">
    <Navbar />
    <Hero />
   </div>   
  </header>
 )
}

export default Header
