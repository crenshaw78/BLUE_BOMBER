import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';

function SeeYourDemo (props) {

  const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () => elRef.current.scrollIntoView();
  
    return [executeScroll, elRef];
  };

  const [executeScroll, elRef] = useScroll()
  // eslint-disable-next-line
  useEffect(executeScroll, [])

  const [formState, setFormState] = useState({ name: '', email: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email } = formState;

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
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>Sign In To View Your Demo</h1>
      <p style={{fontSize: '3.5vmin', margin: '2vmin'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <form id="ContactUs-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={{marginRight: 36}}>Email:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" style={{width: '60%'}} />
        </div>
        <div>
          <label htmlFor="password" style={{marginRight: 10}}>Password:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="password" style={{width: '60%'}} />
        </div>
        {errorMessage && (
          <div>
          <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" style={{marginLeft: 120}}>Submit</button>
      </form>
      <Button style={{width: '40vmin', margin: '2vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: 'black', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
    </div>
  )
};

export default SeeYourDemo;