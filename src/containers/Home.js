import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'
import Gallery from '../components/gallery'

export default class extends Component {
  constructor() {
    super()
    this.state = { lightboxImage: null }
    this.handleImageClick = this.handleImageClick.bind(this)
    this.handleLightboxClick = this.handleLightboxClick.bind(this)
  }

  handleImageClick(e) {
    this.setState({lightboxImage: e.target.offsetParent.children[0].src})
    console.log(this.state);
  }

  handleLightboxClick() {
    this.setState({lightboxImage: null})
  }

  render() {
    var images = [
      {src: '../img/fpo.jpg', id: 1},
      {src: '../img/fpo.jpg', id: 2},
      {src: '../img/fpo.jpg', id: 3},
      {src: '../img/fpo.jpg', id: 4},
      {src: '../img/fpo.jpg', id: 5},
      {src: '../img/fpo.jpg', id: 6},
      {src: '../img/fpo.jpg', id: 7},
      {src: '../img/fpo.jpg', id: 8},
      {src: '../img/fpo.jpg', id: 9}
    ]

    return (
      <PageTransition>
        <section className="home">
          <Gallery index="1" handleImageClick={this.handleImageClick} images={images}/>
          <Gallery index="2" handleImageClick={this.handleImageClick} images={images}/>
          <Gallery index="3" handleImageClick={this.handleImageClick} images={images}/>
          {this.state.lightboxImage !== null && (
            <div className="lightbox" onClick={this.handleLightboxClick}>
              <div className="lightbox-inner">
                <img src={this.state.lightboxImage} />
              </div>
            </div>
          )}
        </section>
      </PageTransition>
    )
  }
}
