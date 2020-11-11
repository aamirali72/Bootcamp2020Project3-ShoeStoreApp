import React, { Component } from 'react'
import {NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">Users</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
