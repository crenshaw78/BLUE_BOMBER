import React from 'react';

function Contact () {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>Contact Us</h1>
      Contact form here
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

export default Contact;