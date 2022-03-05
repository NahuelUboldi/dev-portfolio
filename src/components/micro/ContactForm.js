import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xvolrbao');
  if (state.succeeded) {
    return <p>Thanks for your kind words!</p>;
  }

  return (
    <form
      className='text-center'
      onSubmit={handleSubmit}
      action='https://formspree.io/f/xvolrbao'
      method='POST'
    >
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          name='name'
          className='form-control text-center'
          id='name'
        />
        <ValidationError prefix='Name' field='name' errors={state.errors} />
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          name='email'
          className='form-control text-center'
          id='email'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>
      <div className='mb-3'>
        <label htmlFor='msg' className='form-label'>
          Message
        </label>
        <textarea
          className='form-control text-center'
          id='message'
          name='message'
          rows='4'
        ></textarea>
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
      </div>
      <button
        type='submit'
        className='btn btn-dark'
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
