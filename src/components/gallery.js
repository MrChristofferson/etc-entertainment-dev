import React, { Component } from 'react'

export default class extends Component {
  render() {
    var galleryIndex = `index-${this.props.index}`

    var imageList = this.props.images.map(image => {
      return (
        <div className="img-container" key={image.id} onClick={this.props.handleImageClick}>
          <img src={image.src} />
          <div className="img-overlay" data-id={image.id}></div>
        </div>
      )
    })

    return (
      <div className={`gallery-container ${galleryIndex}`}>
        <div className="gallery">
          {imageList}
        </div>
      </div>
    )
  }
}
