import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '../molecules/Accordion';
import Label from '../atoms/Label';

const useStyles = makeStyles({
  root: {
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
});

const MpsSettings = () => {
  const classes = useStyles();
  return (
    <Accordion headerText={'MPS Settings'} isOpen={true}>
      <div>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <Grid item md={12} lg={12} sm={12} xs={12} className={classes.container}>
              <Label name="MPS Model: Example Pre-Defined Name" id="mps1" />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12} className={classes.container}>
              <Label name="Version: 1.1003" id="mps2" />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12} className={classes.container}>
              <Label name="Last Import: 11-04-2021" id="mps3" />
            </Grid>
          </Grid>
          <Grid item md={9} lg={9} sm={9} xs={9} className={classes.container}>
            <button>Change</button>
          </Grid>
        </Grid>
      </div>
    </Accordion>
  );
};

export default MpsSettings;
