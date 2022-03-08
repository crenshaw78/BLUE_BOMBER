import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from './Navigation';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import OnlineTickets from "../pages/OnlineTickets";
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

function PageHandler() {
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'FAQ':
        return <FAQ />;
      case 'OnlineTickets':
        return <OnlineTickets />;
      default:
        return <Home/>;
    }
  };

  return (
    <div>
      <Header />
      <Row style = {{paddingRight: '12vmin'}}>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} alignment='right' size='3vmin'/>
      </Row>
      <Hero />
      <div>{renderPage(currentPage)}</div>
      <Footer />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} alignment='center' size='4vmin'/>
    </div>
  );
}

export default PageHandler;