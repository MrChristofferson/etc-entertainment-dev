import 'normalize.css/normalize.css'
import '../styles/index.sass'

import React, { Component } from 'react'
import Navigation from '../components/navigation'
import { AppEntrance } from '../util/transitions'

export default class extends Component {
  render() {
    return (
      <AppEntrance>
        <Navigation />
        <div id="app-body">
          {this.props.children}
        </div>
      </AppEntrance>
    )
  }
}
