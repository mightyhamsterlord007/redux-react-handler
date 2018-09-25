import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
          <a href='/'>DASHBOARD</a>
          {this.props.clickedState}
      </nav>
    )
  }
}

export default Nav;