import React from 'react'
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import { Container } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import './App.css'
import ContactusButton from "./contactusbutton";


function Header() {
  return (
      <Container maxWidth='xl' className="headerInline" style={{backgroundColor: 'skyblue'}}>
      <ul>
        <li>
          <h3> Shoe Store</h3>
        </li>
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
          <NavLink to="/contactus"><ContactusButton/></NavLink>
        </li>
      </ul>
      
      </Container>
  );
}
export default Header;