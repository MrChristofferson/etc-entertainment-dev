import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'

export default class extends Component {
  render() {
    return (
      <PageTransition>
        <section className="page reviews">
          Reviews
        </section>
      </PageTransition>
    )
  }
}
