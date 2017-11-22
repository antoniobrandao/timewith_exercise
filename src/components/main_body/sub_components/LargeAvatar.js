import React, { Component } from 'react'

import trusted_icon from '../../../assets/svg/avatar_icon_trusted.svg'
import large_avatar_img from '../../../assets/png/avatar/avatar_large.png'

class LargeAvatar extends Component {
  render() {
    return (
      <div className='large-avatar'>
        <img src={large_avatar_img} alt="Iñigo" />
        <img className='icon' src={trusted_icon} alt="Trusted" />
        <h3>Iñigo M.</h3>
        <p>Purdue Univ, Hammond</p>
      </div>
    );
  }
}

export default LargeAvatar