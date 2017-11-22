import React, { Component } from 'react'
import './footer.css'

import FooterMainNav from './sub_components/FooterMainNav'
import FooterMiddleSection from './sub_components/FooterMiddleSection'
import FooterBottom from './sub_components/FooterBottom'

class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        <FooterMainNav />
        <FooterMiddleSection />
        <FooterBottom />
      </div>
    );
  }
}

export default Footer