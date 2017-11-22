import React, { Component } from 'react'
import './css/breadcrumbs.css'

import arrow_left_icon from '../../assets/svg/main_menu_item_arrow_right.svg';
import arrow_down_icon from '../../assets/svg/dropdown_arrow_down.svg';

import Select from 'react-select'
import 'react-select/dist/react-select.css'

var options = [
  { value: 'One', label: 'General Anxiety Disorder' },
];

class BreadCrumbs extends Component {
  render() {

    const select_options = {
      searchable:false,
      autosize:true,
      clearable:false
    }

    return (
      <div id='navigation-breadcrumbs'>
        <ul>
          <li className='.parent-section'>
            <p>Areas of Councelling</p>
            <img src={arrow_left_icon} alt="TimeWith" />
          </li>
          <li className='.parent-section'>
            <p>Anxiety</p>
            <img src={arrow_left_icon} alt="TimeWith" />
          </li>
        </ul>
        <div className='select-container'>
          <Select
            {...select_options}
            arrowRenderer={()=>{}}
            name="form-field-name"
            value="One"
            className='select'
            options={options}
          />
          <img className='select-arrow' src={arrow_down_icon} alt="TimeWith" />
        </div>
      </div>
    );
  }
}

export default BreadCrumbs