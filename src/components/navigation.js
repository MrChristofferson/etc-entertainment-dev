import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    var links = [
      { to: '/', text: 'Home'},
      { to: '/about', text: 'About'},
      { to: '/about', text: 'Sermons'}
    ]

    return (
      <div id="app-navigation">
        <img src="../img/home-logo.png" className="home-logo" />
        <nav>
          {links.map(link => {
            return <Link to={link.to} className={window.location.pathname == link.to ? 'active' : ''} key={link.text}>{link.text}</Link>
          })}
        </nav>
      </div>
    )
  }
}
