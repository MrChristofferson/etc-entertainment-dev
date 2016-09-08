import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'

class Home extends Component {
  render() {
    return (
      <PageTransition>
        <section className="live">
					<h1>LIVE</h1>
          <img src="../img/ryan.jpg" />
        </section>
      </PageTransition>
    )
  }
}

export default Home
