import React from 'react';
import ContactForm from './micro/ContactForm';
import SectionTitles from './micro/SectionTitles';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container d-flex flex-column align-items-center'>
        <SectionTitles title={'Contact'} subtitle={'Get in touch with me.'} />

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
