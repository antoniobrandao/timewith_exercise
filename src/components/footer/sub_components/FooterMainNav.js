import React, { Component } from 'react'

import Select from 'react-select'
import arrow_up_down from '../../../assets/svg/icon_arrows_up_down.svg';
import uk_flag from '../../../assets/png/flags/uk.png';

class FooterMainNav extends Component {
  render() {

    var options = [
      { value: 'One', label: 'UK - English  - £GBP' },
    ];

    const select_options = {
      searchable:false,
      autosize:true,
      clearable:false
    }

    return (
      <div className='footer-main-nav'>
        <div className='central-column'>
          <ul>
            <li>
              About Us
            </li>
            <li>
              Blog
            </li>
            <li>
              Guides
            </li>
            <li>
              Privacy Policy
            </li>
            <li>
              Terms Of Use
            </li>
            <li>
              Sitemap
            </li>
          </ul>
          <div className='select-container'>
            <img className='flag' src={uk_flag} alt="United Kingdom" />
            <img className='arrows' src={arrow_up_down} />
            <Select
              {...select_options}
              arrowRenderer={()=>{}}
              name="form-field-name"
              value="One"
              className='select'
              options={options}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FooterMainNav