import React, { Component } from 'react'

export default class extends Component {
  render() {
    var imageData = this.props.images

    var imageList = imageData.map(image => {
      return (
        <div id="img-container">
          <img src={image.src} />
        </div>
      )
    })

    return (
      <div id="gallery-container">
        <div id="gallery">
          {imageList}
        </div>
      </div>
    )
  }
}
