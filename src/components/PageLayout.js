import React, { useState } from 'react';
import Navigation from './Navigation';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import OnlineTickets from "../pages/OnlineTickets";
import Hero from './Hero'

function PageLayout() {
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
      <div style={{display: "flex", flexDirection: "row", margin: 30, justifyContent: "space-between"}}>
        <h1>Drive-Innovations</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <Hero />
      <div>{renderPage(currentPage)}</div>
      <h1>Drive-Innovations</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default PageLayout;