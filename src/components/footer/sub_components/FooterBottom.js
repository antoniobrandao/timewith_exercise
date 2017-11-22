import React, { Component } from 'react'

import icon_rss from '../../../assets/svg/icon_rss_small.svg';
import icon_mail from '../../../assets/svg/icon_mail_small.svg';

class FooterNavColumns extends Component {
  render() {
    return (
      <div className='footer-bottom'>
        <div className='central-column'>
          <div className='content'>
            <p>Copyright © 2009-2015 Trinity</p>
            <p>|</p>
            <p> Blog</p>
            <img className='rss' src={icon_rss} alt="RSS" />
            <p>|</p>
            <p>Newsletter</p>
            <img className='email' src={icon_mail} alt="Email" />
          </div>
        </div>
      </div>
    );
  }
}

export default FooterNavColumns