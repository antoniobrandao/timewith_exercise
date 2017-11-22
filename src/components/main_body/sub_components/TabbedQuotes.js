import React, { Component } from 'react'

import icon_twitter from '../../../assets/svg/icon_twitter_small.svg';

class TabbedQuotes extends Component {
  render() {
    return (
      <div className='tabbed-quotes'>
        <ul className='tabs'>
          <li className='active'>
            Symptoms
          </li>
          <li>
            Understanding Anxiety
          </li>
          <li>
            How Can Therapy Help?
          </li>
        </ul>
        <div className='blockquote-container'>
          <blockquote>
            But how do we know when anxiety gets out of hand?  When does “feeling anxious” move towards being an “anxiety disorder”?
          </blockquote>
          <button className='ghost-button rounded'>
            <img src={icon_twitter} alt="Twitter" />
            Tweet
          </button>
        </div>
      </div>
    );
  }
}

export default TabbedQuotes