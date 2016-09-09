import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'

class About extends Component {

  handleClick() {
    document.body.classList.toggle('watch-live-active')
  }

  render() {
    return (
      <PageTransition>
        <section className="watch-live">
					<h1>Watch live</h1>
          {/* <video src="http://techslides.com/demos/sample-videos/small.mp4" autoPlay loop muted></video> */}
          <i className="fa fa-arrow-down" aria-hidden="true" onClick={this.handleClick}></i>
        </section>
      </PageTransition>
    )
  }
}

export default About
