import React from 'react';
import {Button} from 'react-bootstrap';

function WhyYouNeedUs (props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>Why You Need Us</h1>
      <p style={{textAlign:'justify', fontSize: '3.5vmin', margin: '0vmin 10vmin 5vmin 10vmin'}}>With the world around us becoming more and more connected, the need for a high-functioning digital website has never been greater. Let us make that site for you. We'll entrust the drive-in business to you!</p>
      <Button style={{width: '40vmin', margin: '2vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: 'black', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
    </div>
  )
};

export default WhyYouNeedUs;