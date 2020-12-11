import React from 'react'
import { NavLink } from "react-router-dom";
// import { HomeIcon } from '@material-ui/icons';
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import { Container } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import './App.css'

function Header() {
  return (
      <Container maxWidth='xl' className="headerInline" style={{backgroundColor: 'skyblue'}}>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/"><HomeIcon color="primary"/>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about"><InfoIcon color="primary"/>About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Product"><AddShoppingCartIcon color="secondary"/>Products</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contactus">Contact</NavLink>
        </li>
      </ul>
      </Container>
  );
}
export default Header;