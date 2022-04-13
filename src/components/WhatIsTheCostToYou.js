import React from 'react';
import {Button} from 'react-bootstrap';

function WhatIsTheCostToYou (props) {
  return (
    <div style={{textAlign: 'center', marginTop: '20vmin'}}>
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>What's the Cost to You?</h1>
      <p style={{textAlign:'justify', fontSize: '3.5vmin', margin: '0vmin 10vmin 5vmin 10vmin'}}>Absolutely free! We collect a digital ticket fee when the customer uses our convinent service to purchase tickets to your business. We will maintain your site with industry standards. Leaving you to run your business worry free. The possibilities go so much further than ticket sales! Let's start this journey today. Call 651-500-3640 to request your demo site today!</p>
      <Button style={{width: '40vmin', margin: '2vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: 'black', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
    </div>
  )
};

export default WhatIsTheCostToYou;