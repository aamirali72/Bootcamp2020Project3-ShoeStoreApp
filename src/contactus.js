import React from 'react';
import { TextField, Button } from '@material-ui/core';

import './App.css'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      maxWidth: 900,
      margin: theme.spacing(1),
      width: '45ch',
      height: '7ch',
    },
  },
}));

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 35,
  width: 400,
  padding: '0 0',
  margin: '60px 0px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

export default function Contactus() {
  const classes = useStyles();

  const getUserName = (e) => {
    console.warn(e.target.value)
  }
  const getUserEmail = (e) => {
    console.warn(e.target.value)
  }
  const getUserCell = (e) => {
    console.warn(e.target.value)
  }
  const getUserMsg = (e) => {
    console.warn(e.target.value)
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="contactDiv">
        <h1>Contact Us</h1>
        <ul>
          <li>
            <TextField
              id="standard-textarea"
              label="Ensert Name"
              type="text"
              placeholder="Type Name"
              multiline
              onChange={getUserName}
            />
          </li>
          <li><TextField
            id="standard-textarea"
            label="Email Address"
            placeholder="Type Email Address"
            type="email"
            onChange={getUserEmail}
          />
          </li>
          <li><TextField
            label="Contact Number"
            placeholder="Type Contact Number"
            type="text"
            id="standard-textarea"
            onChange={getUserCell}
          />
          </li>
          <li><TextField
            id="outlined-multiline-static"
            label="Message"
            multiline rows={4}
            placeholder="Type Message Here"
            variant="outlined"
            onChange={getUserMsg}
          />
          </li>
          <li>
            <Button style={style}>
              CONTACT
            </Button>
          </li>
        </ul>
      </div>
    </form>
  );
}