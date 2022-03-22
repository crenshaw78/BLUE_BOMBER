import React from 'react';
import WhyYouNeedUs from '../components/WhyYouNeedUs';
import Gallery from '../components/Gallery';
import WhatWeOffer from '../components/WhatWeOffer';
import WhatIsTheCostToYou from '../components/WhatIsTheCostToYou'

function Home (props) {
  return (
    <div style={{marginTop: '20vmin'}}>
      <WhyYouNeedUs handlePageChange={props.handlePageChange} />
      <Gallery />
      <WhatWeOffer handlePageChange={props.handlePageChange} />
      <WhatIsTheCostToYou handlePageChange={props.handlePageChange} />
    </div>
  )
};

export default Home;