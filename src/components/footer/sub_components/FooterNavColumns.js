import React, { Component } from 'react'

class FooterNavColumns extends Component {
  render() {
    return (
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
    );
  }
}

export default FooterNavColumns