import React from 'react';
import {Button} from 'react-bootstrap';

function TicketsSection () {
  return (
    <div>
      <h1>Online Tickets</h1>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Button>Book Tickets</Button>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Button>Book Tickets</Button>
        </div>
      </div>
    </div>
  )
};

export default TicketsSection;