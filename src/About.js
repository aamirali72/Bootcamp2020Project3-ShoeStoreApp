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
      About PAGE
      <Avatar alt="Aamir Ali Picture" src={AamirPircure} className={classes.large}/>
    </div>
  )
}
export default About