import React, { Component } from 'react'

import RelatedArticles from './RelatedArticles'
import RelatedTherapies from './RelatedTherapies'

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar-content'>
        Sidebar
        <RelatedArticles />
        <RelatedTherapies />
      </div>
    );
  }
}

export default Sidebar