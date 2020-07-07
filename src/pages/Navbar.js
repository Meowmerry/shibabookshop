import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul id="nav-bar">
        <li class="select"><a href="/login">Home</a></li>
        <li class="select"><a href="home">Page</a></li>
       </ul>
      </div>
    )
  }
}
