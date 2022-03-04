import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';
import { FaPhoneAlt } from 'react-icons/fa';

function Header() {

  return (

    <Row style={{alignItems: 'flex-end'}}>
      <Col sm={2}>
        <Image fluid src={logo} key="logo1" alt="logo" />
      </Col>
      <Col sm={4} style={{paddingBottom: '6vmin'}}>
        <h1 style={{fontWeight: 'bold'}}>Drive-Innovations</h1>
      </Col>
      <Col sm={5} style={{padding: '5vmin', textAlign: 'right'}}>
        <h2><FaPhoneAlt size= {28}/>+1 888 888 8888</h2>
      </Col>
    </Row>
    );
  }
  
  export default Header;