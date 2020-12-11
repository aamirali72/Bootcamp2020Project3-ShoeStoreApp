import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Contactus() {
  const classes = useStyles();

  return (
    <Container>
    <form className={classes.root} noValidate autoComplete="off">
    <h1>Contact Us</h1>
      <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} /><br/>
        <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} /><br />
        <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} /><br />
      
    </form>
    </Container>
  );
}