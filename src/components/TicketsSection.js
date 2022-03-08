import React from 'react';
import {Button, Image} from 'react-bootstrap';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

function TicketsSection () {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontSize: '14vmin'}}>Online Tickets</h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
        <div style={{maxWidth: '49%', display: "flex", flexDirection: "column", alignItems: 'center'}}>
          <Image style={{height: '60vmin'}} fluid src={image1} key="image1" alt="image of cars at a drive-in movie theater" />
          <br />
          <p style={{fontSize: '3.5vmin'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin'}}>Book Tickets</Button>
        </div>
        <div style={{maxWidth: '49%', display: "flex", flexDirection: "column", alignItems: 'center'}}>
          <Image style={{height: '60vmin'}} fluid src={image2} key="image2" alt="image of three people laughing in a car while one is eating popcorn" />
          <br />
          <p style={{fontSize: '3.5vmin'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin'}}>Book Tickets</Button>
        </div>
      </div>
    </div>
  )
};

export default TicketsSection;