import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';

function Footer() {

  return (

    <Row style={{alignItems: 'flex-end', justifyContent: 'center'}}>
        <Col sm={3}>
          <Image fluid style={{height: '25vmin'}} src={logo} key="logo2" alt="logo"/ >
        </Col>  
        <Col sm={5} style={{paddingBottom: '6vmin'}}>
          <h1 style={{fontSize: '6.5vmin', fontWeight: 'bold'}}>Drive-Innovations</h1>
        </Col>
      </Row>
    );
  }
  
  export default Footer;