import React, { useState } from 'react';
import SeeYourDemo from '../pages/SeeYourDemo';
import ContactUs from '../pages/ContactUs';
import Home from "../pages/Home";
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

function PageHandler() {
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'SeeYourDemo':
        return <SeeYourDemo handlePageChange={handlePageChange} />;
      case 'ContactUs':
        return <ContactUs />;
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