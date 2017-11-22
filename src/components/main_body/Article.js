import React, { Component } from 'react'

import TabbedQuotes from './sub_components/TabbedQuotes'
import CommonSymptoms from './sub_components/CommonSymptoms'

class Article extends Component {
  render() {
    return (
      <article>
        <p>
          We all know what it's like to worry from time to time. That flutter of butterflies in your tummy before a final exam, sweaty palms before delivering that big presentation you've been working on for weeks… These are anxious feelings we can all can relate to.
        </p>
        <TabbedQuotes />
        <CommonSymptoms />
      </article>
    );
  }
}

export default Article