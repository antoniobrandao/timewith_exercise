import React, { Component } from 'react'

import Header from './components/Header'
import PageMainBody from './components/PageMainBody'
import Footer from './components/Footer'

class LayoutRoot extends Component {
  render() {
    return (
      <div id='layout-root'>
        <Header />
        <PageMainBody />
        <Footer />
      </div>
    )
  }
}

export default LayoutRoot
