import React from 'react'
import ContactForm from './micro/ContactForm'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container d-flex flex-column align-items-center'>
        <span className='display-3'>Contact</span>
        <span className='h3 font-serif mb-5'>
          Reach Out To Me // Get in touch with me.
        </span>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact