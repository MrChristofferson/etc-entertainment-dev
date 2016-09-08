import 'normalize.css/normalize.css'
import '../styles/index.sass'

import React, { Component } from 'react'
import Navigation from '../components/navigation'
import Live from './Live'
import { AppEntrance } from '../util/transitions'

export default class extends Component {
  handleClick(e) {
    console.log(e.target.classList[1]);
    if (e.target.classList[1] === 'fa-arrow-left') {
      document.body.classList.toggle('left-menu-active')
    }
    if (e.target.classList[1] === 'fa-arrow-right') {
      document.body.classList.toggle('right-menu-active')
    }
  }

  render() {
    return (
      <AppEntrance>
        <Live />
        <Navigation />
        <div id="app-body">
          {this.props.children}
          <i className="fa fa-arrow-left" aria-hidden="true" onClick={this.handleClick}></i>
          <i className="fa fa-arrow-right" aria-hidden="true" onClick={this.handleClick}></i>
          <video src="../img/broll.mp4" autoPlay loop></video>
        </div>
      </AppEntrance>
    )
  }
}
