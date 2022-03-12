import React from 'react';
import Welcome from '../components/Welcome';
import Gallery from '../components/Gallery';
import TicketsSection from '../components/TicketsSection';
import DemoVideo from '../components/DemoVideo';

function Home (props) {
  return (
    <div>
      <Welcome handlePageChange={props.handlePageChange} />
      <Gallery />
      <TicketsSection handlePageChange={props.handlePageChange} />
      <DemoVideo />
    </div>
  )
};

export default Home;