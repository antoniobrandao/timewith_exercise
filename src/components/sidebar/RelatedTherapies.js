import React, { Component } from 'react'

import icon_learned from '../../assets/svg/avatar_icon_learned.svg';

class RelatedTherapies extends Component {
  render() {
    return (
      <div className='articles-list'>
        <h6>Related Therapies</h6>
        <ul>
          <li>
            <div className='avatar-container'>
              <img className='avatar' src={icon_learned} alt="Avatar" />
            </div>
            <div className='labels'>
              <p className='title'>Article Title w/ some more text</p>
              <span className='author'>Article Author</span>
            </div>
          </li>
          <li>
            <div className='avatar-container'>
              <img className='avatar' src={icon_learned} alt="Avatar" />
            </div>
            <div className='labels'>
              <p className='title'>Article Title w/ some more text</p>
              <span className='author'>Article Author</span>
            </div>
          </li>
          <li>
            <div className='avatar-container'>
              <img className='avatar' src={icon_learned} alt="Avatar" />
            </div>
            <div className='labels'>
              <p className='title'>Article Title w/ some more text</p>
              <span className='author'>Article Author</span>
            </div>
          </li>
          <li>
            <div className='avatar-container'>
              <img className='avatar' src={icon_learned} alt="Avatar" />
            </div>
            <div className='labels'>
              <p className='title'>Article Title w/ some more text</p>
              <span className='author'>Article Author</span>
            </div>
          </li>
          <li>
            <div className='avatar-container'>
              <img className='avatar' src={icon_learned} alt="Avatar" />
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

export default RelatedTherapies