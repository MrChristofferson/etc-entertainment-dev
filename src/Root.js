import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Booths from './containers/Booths'
import Contact from './containers/Contact'
import About from './containers/About'
import Reviews from './containers/Reviews'
import Pricing from './containers/Pricing'

export default class extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/booths" component={Booths} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    )
  }
}
