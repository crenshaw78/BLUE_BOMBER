import React from 'react';
import { Carousel, Button } from 'react-bootstrap';



function Hero (props) {
  return (

  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../assets/images/image1.jpg')}
        alt="First slide"
        style={{objectFit: 'cover', height: '60vmin'}}
      />
      <Carousel.Caption>
        <h1 style={{fontSize: '14vmin', color: '#d16e04'}}>Drive-Innovations</h1>
        <h2 style={{fontSize: '8vmin', color: 'white'}}>Digitize Your Drive-In</h2>
        <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: '#d16e04', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../assets/images/image2.jpg')}
        alt="Second slide"
        style={{objectFit: 'cover', height: '60vmin'}}
      />
      <Carousel.Caption>
        <h1 style={{fontSize: '14vmin', color: '#d16e04'}}>Drive-Innovations</h1>
        <h2 style={{fontSize: '8vmin', color: 'white'}}>Modernize Your Website</h2>
        <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: '#d16e04', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../assets/images/image3.jpg')}
        alt="Third slide"
        style={{objectFit: 'cover', height: '60vmin'}}
      />
      <Carousel.Caption>
        <h1 style={{fontSize: '14vmin', color: '#d16e04'}}>Drive-Innovations</h1>
        <h2 style={{fontSize: '8vmin', color: 'white'}}>Show Real-Time Stats</h2>
        <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: '#d16e04', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../assets/images/image4.jpg')}
        alt="Fourth slide"
        style={{objectFit: 'cover', height: '60vmin'}}
      />
      <Carousel.Caption>
        <h1 style={{fontSize: '14vmin', color: '#d16e04'}}>Drive-Innovations</h1>
        <h2 style={{fontSize: '8vmin', color: 'white'}}>At No Cost to You</h2>
        <Button style={{width: '40vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin', backgroundColor: '#d16e04', color: 'white'}} onClick={() => props.handlePageChange('ContactUs')} >Request A Demo</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
};

export default Hero;