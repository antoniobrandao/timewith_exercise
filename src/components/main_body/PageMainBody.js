import React, { Component } from 'react'

import './css/highlight_area.css'
import './css/large_avatar.css'
import './css/common_symptoms.css'
import './css/main_body.css'

import HighlightArea from './HighlightArea'
import Article from './Article'
import Sidebar from './sidebar/Sidebar'

class PageMainBody extends Component {
  render() {
    return (
      <div id='page-main-body'>
        <HighlightArea />
        <div className='container-2-col'>
          <Article className='left'/>
          <Sidebar className='right'/>
        </div>
      </div>
    );
  }
}

export default PageMainBody