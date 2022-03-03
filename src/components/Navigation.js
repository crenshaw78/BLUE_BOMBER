import { React, useEffect } from 'react';

function Navigation(props) {
  const tabs = ['Home', 'About', 'OnlineTickets', 'FAQ', 'Contact'];

  useEffect(() => {
    const page = tabs.find(tab => window.location.hash.includes(tab.toLowerCase()))
    if (page) props.handlePageChange(page)
    // eslint-disable-next-line
  }, [])

  return (
    <ul className="nav nav-tabs" style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "row" }}>
      {tabs.map(tab => (
        <li className="nav-item" key={tab} style={{marginLeft: 30}}>
          <a
            href={'#' + tab.toLowerCase()}
            
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;