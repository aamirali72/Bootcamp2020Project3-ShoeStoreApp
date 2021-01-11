import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, container} from '@material-ui/core';
import AamirPircure from './img/Aamirpicture.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  large: {
    width: theme.spacing(37),
    height: theme.spacing(37),

  },
}));

function About() {
  const classes = useStyles();
  return (
    <container>
      <h4 style={{ justifyContent: 'center' }}>About Us</h4>
        <h5>Universal Software Solutions</h5>
        <h6>USS since 2000 based in Pakistan that providing IT solutions to its client through business process consulting, software development online system cloud based.</h6>
      <div className={classes.root} style={{ justifyContent: "center" }}><Avatar alt="Aamir Ali Picture" src={AamirPircure} className={classes.large}/></div>
    </container>
  )
}
export default About