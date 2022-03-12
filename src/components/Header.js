import React from 'react';
import Navigation from './Navigation';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';
import { FaPhoneAlt } from 'react-icons/fa';

function Header(props) {

  return (

    <Container>
      <Row>
        <Col sm={2}>
          <Image fluid src={logo} key="logo1" alt="logo" />
        </Col>
        <Col sm={4} style={{paddingTop: '6vmin'}}>
          <h1 style={{fontWeight: 'bold'}}>Drive-Innovations</h1>
        </Col>
        <Col sm={6} style={{textAlign: 'right'}}>
          <Row style={{paddingRight: '2vmin'}}>
            <h2><FaPhoneAlt size= {28}/>+1 888 888 8888</h2>
          </Row>
          <Row>
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} alignment='right' size='2.6vmin'/>
          </Row>
        </Col>
      </Row>
    </Container>
    );
  }
  
  export default Header;