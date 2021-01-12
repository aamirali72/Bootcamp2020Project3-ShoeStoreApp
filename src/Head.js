import React from 'react'
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import ContactusButton from "./contactusbutton";
import { Menu } from '@material-ui/icons'


function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant='h4' style={{ flexGrow: 1 }}>Shoe Store</Typography>
          <Button color="inherit"><NavLink exact activeClassName="active" to="/"><HomeIcon />Home</NavLink></Button>
          <Button color="inherit"><NavLink activeClassName="active" to="/about"><InfoIcon />About</NavLink></Button>
          <Button color="inherit"><NavLink activeClassName="active" to="/Product"><AddShoppingCartIcon />Products</NavLink></Button>
          <NavLink to="/contactus"><ContactusButton /></NavLink>

        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;