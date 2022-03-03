import React from 'react';
import Welcome from '../components/Welcome'
import TicketsSection from '../components/TicketsSection';
import DemoVideo from '../components/DemoVideo';

function Home () {
  return (
    <div>
      <Welcome />
      <TicketsSection />
      <DemoVideo />
    </div>
  )
};

export default Home;