import { React, useEffect } from 'react';

function Navigation(props) {
  const tabs = [
    {nav:'Home', display:'Home'}, 
    {nav:'SeeYourDemo', display:'See Your Demo'}, 
    {nav:'ContactUs', display:'Contact Us'}
  ];

  useEffect(() => {
    const page = tabs.find(tab => window.location.hash.includes(tab.nav.toString().toLowerCase()))
    if (page) props.handlePageChange(page)
    // eslint-disable-next-line
  }, [])

  return (
    <ul className="nav nav-tabs" style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "row", justifyContent: props.alignment }}>
      {tabs.map(tab => (
        <li className="nav-item" key={tab.nav} style={{marginLeft: 30, fontSize: props.size}}>
          <a
            href={'#' + tab.nav.toLowerCase()}
            
            onClick={() => props.handlePageChange(tab.nav)}
            className={
              props.currentPage === tab.nav ? 'nav-link active' : 'nav-link'
            }
          >
            {tab.display}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;