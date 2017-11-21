import React, { Component } from 'react'

import HighlightArea from './sub_components/HighlightArea'
import Sidebar from './sub_components/Sidebar'
import Article from './sub_components/Article'

class PageMainBody extends Component {
  render() {
    return (
      <div id='page-main-body'>
        <HighlightArea />
        <div>
          <Article />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default PageMainBody