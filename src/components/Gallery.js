import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';

function Gallery () {
  return (
    <Row>
      <Col sm={4}>
        <Image style={{height: '50vmin', width: '60vmin'}} fluid src={image3} key="image3" alt="image of a large sign advertising a drive-in movie theater" />
      </Col>
      <Col sm={4}>
        <Image style={{height: '50vmin', width: '60vmin' }} fluid src={image4} key="image4" alt="image of dozens of cars at a drive-in movie theater" />
      </Col>
      <Col sm={4}>
        <Image style={{height: '50vmin', width: '60vmin'}} fluid src={image5} key="image5" alt="image of a movie screen at a drive-in movie theater" />
      </Col>
    </Row>
  )
};

export default Gallery;