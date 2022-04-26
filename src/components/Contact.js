import React from 'react';
import ContactForm from './micro/ContactForm';
import Email from './micro/Email';
import SectionTitles from './micro/SectionTitles';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container d-flex flex-column align-items-center'>
        <SectionTitles title={'Contact'} subtitle={'Get in touch with me.'} />
        <p className='font-sans text-center'>
          Send an email to <Email /> or write a message down below.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
