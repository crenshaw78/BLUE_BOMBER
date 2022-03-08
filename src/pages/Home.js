import React from 'react';
import Welcome from '../components/Welcome';
import Gallery from '../components/Gallery';
import TicketsSection from '../components/TicketsSection';
import DemoVideo from '../components/DemoVideo';

function Home () {
  return (
    <div>
      <Welcome />
      <Gallery />
      <TicketsSection />
      <DemoVideo />
    </div>
  )
};

export default Home;