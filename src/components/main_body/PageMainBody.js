import React, { Component } from 'react'

import './css/highlight_area.css'
import './css/large_avatar.css'

import HighlightArea from './HighlightArea'
import Article from './Article'
import Sidebar from './sidebar/Sidebar'

class PageMainBody extends Component {
  render() {
    return (
      <div id='page-main-body'>
        <HighlightArea />
        <div>
          <p>PageMainBody</p>
          <Article />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default PageMainBody