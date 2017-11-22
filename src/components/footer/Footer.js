import React, { Component } from 'react'
import './footer.css'

import FooterMainNav from './sub_components/FooterMainNav'
import FooterNavColumns from './sub_components/FooterNavColumns'
import FooterBottom from './sub_components/FooterBottom'

class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        <FooterMainNav />
        <div className='central-column'>
          <FooterNavColumns />
        </div>
        <FooterBottom />
      </div>
    );
  }
}

export default Footer