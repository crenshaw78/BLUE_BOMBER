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
        return <Home handlePageChange={handlePageChange} />;
    }
  };

  return (
    <div>
      <Header handlePageChange={handlePageChange} />
      <Hero handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
      <Footer handlePageChange={handlePageChange} />
    </div>
  );
}

export default PageHandler;