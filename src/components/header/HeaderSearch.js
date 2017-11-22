import React, { Component } from 'react'

import './css/header_search.css'

import search_icon from '../../assets/svg/main_menu_search_icon.svg';

class HeaderSearch extends Component {
  render() {
    return (
      <div className='search-input'>
        <input type='text' className='text-element' placeholder='How are you feeling?'/>
        <img src={search_icon} className="search-input-icon" alt="search" />
      </div>
    )
  }
}

export default HeaderSearch