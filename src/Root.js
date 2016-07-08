import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Booths from './containers/Booths'

export default class extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/booths" component={Booths} />
        </Route>
      </Router>
    )
  }
}
