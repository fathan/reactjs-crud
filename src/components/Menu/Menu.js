import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class Menu extends Component {
  render() {
    return (
      <div>
        <NavLink to={'/'}>Dashboard</NavLink>
        <br/>
        <NavLink to={'/blog'}>Blog</NavLink>
      </div>
    )
  }
}

export default Menu
