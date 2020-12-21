import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[400],
    '&:hover': {
      backgroundColor: purple[500],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ContactusButton() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" size="small" color="primary" className={classes.margin}>
        Contact Us
      </ColorButton>
    </div>
  );
}