import React, { Component } from 'react'

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    var imageList = this.props.images.map(image => {
      return (
        <div id="img-container">
          <img src={image.src} />
          <div className="img-overlay">Teehee</div>
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
