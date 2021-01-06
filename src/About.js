import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AamirPircure from './img/Aamirpicture.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(10),
    },
  },
  large: {
    width: theme.spacing(37),
    height: theme.spacing(37),
    marginLeft: 570,
  },
}));


function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div><h4 style={{ justifyContent: 'center' }}>About Us</h4>
        <h5>Universal Software Solutions</h5>
        <h6>USS since 2000 based in Pakistan that providing IT solutions to its client through business process consulting, software development online system cloud based.</h6>

        <Avatar alt="Aamir Ali Picture" src={AamirPircure} className={classes.large} /></div>
    </div>
  )
}
export default About