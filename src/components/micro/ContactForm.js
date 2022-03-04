import React from 'react';

const ContactForm = () => {
  return (
    <form className='text-center'>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='name'
          aria-describedby='emailHelp'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='email' className='form-control' id='email' />
      </div>
      <div className='mb-3'>
        <label htmlFor='msg' className='form-label'>
          Message
        </label>
        <textarea className='form-control' id='msg' rows='3'></textarea>
      </div>
      <button type='submit' className='btn btn-dark'>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
