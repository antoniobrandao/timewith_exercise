import React, { Component } from 'react'

import RelatedArticles from './RelatedArticles'
import RelatedTherapies from './RelatedTherapies'

import './css/sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar-content left'>
        <RelatedArticles />
        <RelatedTherapies />
      </div>
    );
  }
}

export default Sidebar