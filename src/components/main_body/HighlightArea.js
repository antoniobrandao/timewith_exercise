import React, { Component } from 'react'

import LargeAvatar from './sub_components/LargeAvatar'

import icon_facebook from '../../assets/svg/social_icon_facebook.svg';
import icon_twitter from '../../assets/svg/social_icon_twitter.svg';
import icon_google_plus from '../../assets/svg/social_icon_google_plus.svg';
import icon_playback from '../../assets/svg/icon_speaker.svg';
import icon_play from '../../assets/svg/icon_play.svg';

class HighlightArea extends Component {
  render() {
    return (
      <div id='highlight-area'>

        <div className='top container-2-col'>
          <div className='left'>
            <h1>Anxiety: When to reach out?</h1>
            <h4>When anxious moments move from momentary worries like, ‘did I lock the door?’ to incessant checking - locking and re-locking - or never-ending racing thoughts that feel overwhelming… It might be worth taking the time to check-in, and reach out for support.</h4>
            <div className='tags'>
              <button className='tag-item ghost-button'>Tag Item 1</button>
              <button className='tag-item ghost-button'>Tag Item 2</button>
              <button className='tag-item ghost-button'>Tag Item 3</button>
            </div>
          </div>
          <div className='right'>
            <LargeAvatar />
          </div>
        </div>

        <div className='bottom container-2-col'>
          <div className='audio-player left'>
            <button className='ghost-button'>
              Play
              <img src={icon_play} alt="Play Audio" />
            </button>
            <img className='icon-playback' src={icon_playback} alt="Playback" />
            <p className='audio-note'>Audio Version Available (150min)</p>
          </div>
          <ul className='social-share right'>
            <li className='facebook'>
              <img src={icon_facebook} className="icon-facebook" alt="Facebook" />
            </li>
            <li className='twitter'>
              <img src={icon_twitter} className="icon-twitter" alt="Twitter" />
            </li>
            <li className='google-plus'>
              <img src={icon_google_plus} className="icon-google_plus" alt="Google Plus" />
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default HighlightArea