import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F2F2F2',
    // border: "2px solid #2D2D2D",
    height:'30px',
    '& div': {
      position: 'relative'
    }
  }
}));

const Accordion = (props) => {
  const { headerText = '', isOpen = true } = props;
  const classes = useStyles();
  const [show, setShow] = useState(isOpen);
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item md={11} lg={11} sm={11} xs={11}>
            <division>{headerText}</division>
          </Grid>
          <Grid item md={1} lg={1} sm={1} xs={1}>
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
