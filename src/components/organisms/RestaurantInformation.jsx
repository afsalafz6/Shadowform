import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputField from '../molecules/InputField';
import Accordion from '../molecules/Accordion';

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

const RestaurantInformation = () => {
  const classes = useStyles();
  return (
    <Accordion headerText={'Restaurant Information'} isOpen={true}>
      <div>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField type="text" name="Street" id="street" placeholder="street" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField type="text" name="City" id="city" placeholder="city " />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField type="text" name="State" id="state" placeholder="state" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField type="text" name="Zip" id="zip" placeholder="zip" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField type="text" name="Phone Number" id="phone" placeholder="phone number" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField type="text" name="Fax" id="fax" placeholder="fax" />
          </Grid>
          <Grid item md={6} lg={6} sm={6} xs={6} className={classes.container}>
            <InputField type="text" name="Email" id="email" size="67" placeholder="email" />
          </Grid>
        </Grid>
      </div>
    </Accordion>
  );
};

export default RestaurantInformation;
