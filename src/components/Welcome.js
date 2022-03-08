import React from 'react';
import {Button} from 'react-bootstrap';

function Welcome (props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontSize: '14vmin'}}>Welcome</h1>
      <p style={{fontSize: '3.5vmin', fontWeight: 'lighter'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>
        <Button style={{width: '40vmin', margin: '2vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin'}}>Read More</Button>
        <Button style={{width: '40vmin', margin: '2vmin', fontSize: '4vmin', padding: '4vmin', borderRadius: '8vmin'}}>Online Tickets</Button>
      </div>
    </div>
  )
};

export default Welcome;