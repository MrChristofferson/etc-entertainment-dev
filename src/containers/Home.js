import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'

class Home extends Component {
  render() {
    return (
      <PageTransition>
        <section className="page home">
          <img src="../img/services.png" />
        </section>
      </PageTransition>
    )
  }
}

export default Home
