import React from 'react';
import Navigation from './Navigation';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';

function Footer(props) {

  return (
    <Container>
      <Row style={{alignItems: 'flex-end', justifyContent: 'center'}}>
        <Col sm={3}>
          <Image fluid style={{height: '25vmin'}} src={logo} key="logo2" alt="logo"/ >
        </Col>  
        <Col sm={4} style={{paddingBottom: '6vmin', paddingLeft: 0}}>
          <h1 style={{fontSize: '6.5vmin', fontWeight: 'bold'}}>Drive-Innovations</h1>
        </Col>
      </Row>
      <Row>
          <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} alignment='center' size='4vmin'/>
      </Row>
      <Row style={{fontSize: '3vmin', justifyContent: 'center'}}>&copy; 2022 - Drive-Innovations</Row>
    </Container>
    );
  }
  
  export default Footer;