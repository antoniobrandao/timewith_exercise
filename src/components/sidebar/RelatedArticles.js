import React, { Component } from 'react'

import avatar_small from '../../assets/png/avatar/avatar_small.png';
import icon_trusted_small from '../../assets/svg/icon_trusted_small.svg';

class RelatedArticles extends Component {
  render() {
    return (
      <div className='articles-list'>
        <h6>Related Articles</h6>
        <ul>
          <li>
            <div className='avatar-container'>
              <img className='avatar' src={avatar_small} alt="Avatar" />
              <img className='badge' src={icon_trusted_small} alt="Trusted Badge" />
            </div>
            <div className='labels'>
              <p className='title'>Article Title w/ some more text</p>
              <span className='author'>Article Author</span>
            </div>
          </li>
          <li>
            <div className='avatar-container'>
              <img className='avatar' src={avatar_small} alt="Avatar" />
              <img className='badge' src={icon_trusted_small} alt="Trusted Badge" />
            </div>
            <div className='labels'>
              <p className='title'>Article Title w/ some more text</p>
              <span className='author'>Article Author</span>
            </div>
          </li>
          <li>
            <div className='avatar-container'>
              <img className='avatar' src={avatar_small} alt="Avatar" />
              <img className='badge' src={icon_trusted_small} alt="Trusted Badge" />
            </div>
            <div className='labels'>
              <p className='title'>Article Title w/ some more text</p>
              <span className='author'>Article Author</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default RelatedArticles