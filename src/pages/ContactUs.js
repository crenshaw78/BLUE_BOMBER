import React, { useState } from 'react';

function ContactUs () {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

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
    <div style={{textAlign: 'center', marginTop: '20vmin'}}>
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>ContactUs Us</h1>
      <form id="ContactUs-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{marginRight: 15}}>Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email" style={{marginRight: 18}}>Email:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea rows="5" defaultValue={message} onBlur={handleChange} name="message" />
        </div>
        {errorMessage && (
          <div>
          <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" style={{marginLeft: 120}}>Submit</button>
      </form>
      <h2 style={{fontSize: '5vmin', fontWeight: 'bold', margin: '2vmin'}}>Address:</h2>
      <p style={{fontSize: '3.5vmin'}}>123 Main Street</p>
      <p style={{fontSize: '3.5vmin'}}>Anytown, USA</p>
      <h2 style={{fontSize: '5vmin', fontWeight: 'bold', margin: '2vmin'}}>Phone:</h2>
      <p style={{fontSize: '3.5vmin'}}>888-888-8888</p>
      <h2 style={{fontSize: '5vmin', fontWeight: 'bold', margin: '2vmin'}}>Email:</h2>
      <p style={{fontSize: '3.5vmin'}}>something@email.com</p>
    </div>
  )
};

export default ContactUs;