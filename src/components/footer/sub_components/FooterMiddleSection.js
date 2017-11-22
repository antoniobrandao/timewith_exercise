import React, { Component } from 'react'

import icon_facebook from '../../../assets/svg/icon_facebook_large.svg'
import icon_twitter from '../../../assets/svg/icon_twitter_large.svg'
import icon_google_plus from '../../../assets/svg/icon_google_plus_large.svg'
import verisign from '../../../assets/png/footer/verisign.png'

class FooterMiddleSection extends Component {
  render() {
    return (
      <div className='central-column smaller footer-middle-section'>

        <div className='footer-nav-columns'>
          <div className='footer-nav-column'>
            <h6>Footer Column 1</h6>
            <ul>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
            </ul>
          </div>
          <div className='footer-nav-column'>
            <h6>Footer Column 2</h6>
            <ul>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
            </ul>
          </div>
          <div className='footer-nav-column'>
            <h6>Footer Column 3</h6>
            <ul>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
              <li>Footer Link Item</li>
            </ul>
          </div>
        </div>

        <div className='footer-icons'>
          <div className='social-icons'>
            <img src={icon_facebook} alt="Facebook" />
            <img src={icon_twitter} alt="Twitter" />
            <img src={icon_google_plus} alt="Google Plus" />
          </div>
          <img src={verisign} alt="Verisign" />
        </div>

      </div>
    );
  }
}

export default FooterMiddleSection