import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'
import Countdown from '../components/Countdown'

class Home extends Component {
  render() {
    return (
      <PageTransition>
        <Countdown />
        <section className="page home">
          <img src="../img/services.png" />
        </section>
      </PageTransition>
    )
  }
}

export default Home
