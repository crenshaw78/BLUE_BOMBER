import React, { useState, useEffect, useRef } from 'react';

function ContactUs () {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () => elRef.current.scrollIntoView();
  
    return [executeScroll, elRef];
  };

  const [executeScroll, elRef] = useScroll()
  // eslint-disable-next-line
  useEffect(executeScroll, [])

  function handleChange(e) {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      if (e.target.name === 'email') {
        var emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegEx.test(String(e.target.value).toLowerCase())) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
          setErrorMessage('');
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
    }
  }

  return (
    <div ref={elRef} style={{textAlign: 'center', marginTop: '20vmin'}}>
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>Contact Us</h1>
      <form id="ContactUs-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{marginRight: 23, marginBottom: 15}}>Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" style={{width: '60%'}} />
        </div>
        <div>
          <label htmlFor="email" style={{marginRight: 28, marginBottom: 15}}>Email:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" style={{width: '60%'}} />
        </div>
        <div>
          <label htmlFor="message" style={{marginRight: 5, marginBottom: 15}}>Message:</label>
          <textarea rows="5" defaultValue={message} onBlur={handleChange} name="message" style={{width: '60%'}} />
        </div>
        {errorMessage && (
          <div>
          <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div style={{width: '50%'}}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h2 style={{fontSize: '5vmin', fontWeight: 'bold', margin: '2vmin'}}>Phone:</h2>
      <a href="tel:+6515003640"style={{fontSize: '3.5vmin', textDecoration: 'none', color: 'black'}}>651-500-3640</a>
      <h2 style={{fontSize: '5vmin', fontWeight: 'bold', margin: '2vmin'}}>Email:</h2>
      <a href="mailto:sales@drive-innovations.com?subject=Demo Request" style={{fontSize: '3.5vmin', textDecoration: 'none', color: 'black'}}>sales@drive-innovations.com</a>
    </div>
  )
};

export default ContactUs;