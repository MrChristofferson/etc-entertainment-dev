import React, { Component } from 'react'
import { PageTransition } from '../util/transitions'

class Traditions extends Component {
  render() {
    return (
      <PageTransition>
        <section className="traditions">
					<h1>TRADITIONS</h1>
          <img src="../img/ryan.jpg" />
          <div className="title-stripe">
            <h2>WHAT TO EXPECT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="title-stripe">
            <h2>BELIEFS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="title-stripe">
            <h2>WORSHIP</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </section>
      </PageTransition>
    )
  }
}

export default Traditions
