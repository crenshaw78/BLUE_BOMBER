import React from 'react';
import {Row, Col, Button, Image} from 'react-bootstrap';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

function WhatWeOffer (props) {
  return (
    <div style={{textAlign: 'center', marginTop: '20vmin'}}>
      <h1 style={{fontSize: '14vmin', marginBottom: '4vmin'}}>What We Offer</h1>
      <p style={{textAlign:'justify', fontSize: '3.5vmin', margin: '0vmin 10vmin 5vmin 10vmin'}}>We provide you a responsive website that comes with online ticket sales, real-time movie start times, ticket inventory, and a backend system that allows you to change movies and pictures on your site.</p>
      <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: '#d16e04', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
      <Row style={{margin: '2vmin', marginTop: '14vmin', justifyContent: 'center'}}>
        <Col sm={4}>
          <Image style={{height: '60vmin', width: '85vmin'}} fluid src={image1} key="image1" alt="image of cars at a drive-in movie theater" />
        </Col>
        <Col sm={4}>
          <Image style={{height: '60vmin', width: '85vmin'}} fluid src={image2} key="image2" alt="image of three people laughing in a car while one is eating popcorn" />       
        </Col>
      </Row>

    </div>
  )
};

export default WhatWeOffer;