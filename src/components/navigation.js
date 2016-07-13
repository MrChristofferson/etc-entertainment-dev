import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    var links = [
      { to: '/', text: 'Home'},
      { to: '/booths', text: 'Booths'},
      { to: '/about', text: 'About'},
      { to: '/reviews', text: 'Reviews'},
      { to: '/pricing', text: 'Pricing'},
      { to: '/contact', text: 'Contact'}
    ]

    return (
      <div id="app-navigation">
        <Link to="/" className="logo">
          <img src="../img/logo.png" />
        </Link>
        {links.map(link => {
          return <Link to={link.to} className={window.location.pathname == link.to ? 'active' : ''} key={link.text}>{link.text}</Link>
        })}
      </div>
    )
  }
}
