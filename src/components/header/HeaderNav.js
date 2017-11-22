import React, { Component } from 'react'

import './css/header_nav.css'

import arrow_icon from '../../assets/svg/main_menu_item_arrow_down.svg';

class HeaderNav extends Component {
  render() {
    return (
      <div className='header-navigation'>
        <a className='nav-link text-element' href='#'>
          Need Help with
        </a>
        <a className='nav-link text-element' href='#'>
          Therapy
        </a>
        <a className='nav-link text-element' href='#'>
          Blog
        </a>
        <a className='nav-link text-element' href='#'>
          FAQ's
        </a>
      </div>
    )
  }
}

export default HeaderNav