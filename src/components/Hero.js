import React from 'react';
import {Button} from 'react-bootstrap';

function Hero (props) {
  return (
    <div style={{textAlign: 'center'}}>
      Carosel Here
      <h1 style={{fontSize: '14vmin'}}>Drive-Innovations</h1>
      <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: '#d16e04', color: 'white'}} onClick={() => props.handlePageChange('OnlineTickets')} >Online Tickets</Button>
    </div>
  )
};

export default Hero;