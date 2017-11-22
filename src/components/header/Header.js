import React, { Component } from 'react'

import './css/header_base.css'

import HeaderSearch from './HeaderSearch';
import HeaderNav from './HeaderNav';
import HeaderAuth from './HeaderAuth';

import logo from '../../assets/svg/main_logo.svg';

class Header extends Component {
  render() {
    return (
      <header id='header'>
      	<div className='central-column'>
          <img src={logo} className="timewith-logo" alt="TimeWith" />
          <HeaderSearch />
          <HeaderNav />
          <HeaderAuth />
      	</div>
      </header>
    );
  }
}

export default Header