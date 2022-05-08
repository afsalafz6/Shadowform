import React from 'react';
import InputField from '../molecules/InputField';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#eaeaea',
    // border: "2px solid #2D2D2D",
    '& div': {
      position: 'relative'
    }
  },
  tableSelector: {
    maxHeight: '20vh'
  },
  container: {
    minHeight: '50px',
    minWidth: '100px'
  }
}));

const Accordion = (props) => {
  const { headerText = '', isOpen = true } = props;
  const classes = useStyles();
  const [show, setShow] = useState(isOpen);
  return (
    <div>
      <div>
        <Grid container spacing={0} className={classes.root}>
          <Grid item md={11} lg={11} sm={11} xs={11} className={classes.container}>
            <p>{headerText}</p>
          </Grid>
          <Grid item md={1} lg={1} sm={1} xs={1} className={classes.container}>
            <div onClick={() => setShow(!show)}>
              {show ? <IndeterminateCheckBoxOutlinedIcon /> : <AddBoxOutlinedIcon />}
            </div>
          </Grid>
        </Grid>
      </div>
      {show ? props.children : null}
    </div>
  );
};

export default Accordion;
