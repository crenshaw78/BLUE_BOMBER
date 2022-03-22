import React from 'react';
import {Row, Col, Button, Image} from 'react-bootstrap';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

function WhatWeOffer (props) {
  return (
    <div style={{textAlign: 'center', marginTop: '20vmin'}}>
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>What We Offer</h1>
      <p style={{fontSize: '3.5vmin', margin: '2vmin'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: '#d16e04', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
      <Row style={{justifyContent: 'space-between', margin: '2vmin', marginTop: '10vmin'}}>
        <Col style={{alignItems: 'center'}}>
          <Image style={{height: '60vmin', width: '85vmin'}} fluid src={image1} key="image1" alt="image of cars at a drive-in movie theater" />
        </Col>
        <Col style={{alignItems: 'center'}}>
          <Image style={{height: '60vmin', width: '85vmin'}} fluid src={image2} key="image2" alt="image of three people laughing in a car while one is eating popcorn" />       
        </Col>
      </Row>
    </div>
  )
};

export default WhatWeOffer;