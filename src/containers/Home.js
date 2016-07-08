import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'
import Gallery from '../components/gallery'

export default class extends Component {
  render() {
    var images = [
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'},
      {src: '../img/fpo.jpg'}
    ]

    return (
      <PageTransition>
        <Gallery images={images}/>
      </PageTransition>
    )
  }
}
