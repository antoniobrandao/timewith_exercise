import React, { Component } from 'react'

import './css/header_auth.css'

class HeaderAuth extends Component {
  render() {
    return (
      <div className='auth'>
        <a className='login text-element' href='#'>
          Login
        </a>
        <a className='signup text-element' href='#'>
          Signup
        </a>
      </div>
    )
  }
}

export default HeaderAuth