import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '../molecules/Accordion';
import SelectField from '../molecules/SelectField';

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

const RestaurantConfiguration = () => {
  const classes = useStyles();
  return (
    <Accordion headerText={'Restaurant Configuration'} isOpen={true}>
      <div>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Locale Template" id="localetemp" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Menu Template" id="menutemp" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Operation Template" id="operntemp" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Center List" id="centerlist" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Room List" id="roomlist" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Menu Setting" id="menuset" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Operation Setting" id="opernset" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Payroll Setting" id="payrlset" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Labor Setting" id="labrset" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Labour Rule" id="lbrrule" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Period Rule" id="perdrule" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Routing Rule" id="routrule" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Tax Rule" id="taxrule" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Prerequisite Rule" id="prereq" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Tip Share" id="tipshare" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Clock-In Exception List" id="clock" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Tip Guide" id="tipguide" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField name="Offer" id="offr" />
          </Grid>
        </Grid>
      </div>
    </Accordion>
  );
};

export default RestaurantConfiguration;
