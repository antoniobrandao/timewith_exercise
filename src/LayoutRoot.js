import React, { Component } from 'react'

import Header from './components/header/Header'
import Breadcrumbs from './components/breadcrumbs/BreadCrumbs'
import PageMainBody from './components/main_body/PageMainBody'
import Footer from './components/footer/Footer'


class LayoutRoot extends Component {
  render() {
    return (
      <div id='layout-root'>
        <Header />
        <div className='central-column'>
          <Breadcrumbs />
          <PageMainBody />
        </div>
        <Footer />
      </div>
    )
  }
}

export default LayoutRoot
