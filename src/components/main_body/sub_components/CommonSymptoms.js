
import React, { Component } from 'react'

import icon_temperature from '../../../assets/svg/icon_temperature_large.svg';
import arrow_right from '../../../assets/svg/icon_arrow_right_dark.svg';

class CommonSymptoms extends Component {
  render() {
    return (
      <div className='common-symptoms container-2-col'>
        <div className='left'>
          <div className='headline'>
            <img src={icon_temperature} alt="Icon" />
            <h1>Common Symptoms</h1>
          </div>
          <p>
            Anxiety disorders come in lots of different shapes and sizes - phobias, panic attacks, sleep disorders, social anxiety…  But one thing they all have in common is that they all have the ability to interfere with the pleasures of everyday life. 
          </p>
        </div>
        <ul className='right'>
          <li>
            <img src={arrow_right} alt="Icon" />
            <p>Racing thoughts</p>
          </li>
          <li>
            <img src={arrow_right} alt="Icon" />
            <p>Fears that don’t match up</p>
          </li>
          <li>
            <img src={arrow_right} alt="Icon" />
            <p>Difficulty sleeping</p>
          </li>
          <li>
            <img src={arrow_right} alt="Icon" />
            <p>Compulsive behaviour</p>
          </li>
          <li>
            <img src={arrow_right} alt="Icon" />
            <p>Panic attacks</p>
          </li>
          <li>
            <img src={arrow_right} alt="Icon" />
            <p>Tension in the body</p>
          </li>
          <li>
            <img src={arrow_right} alt="Icon" />
            <p>Feeling self-conscious</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default CommonSymptoms