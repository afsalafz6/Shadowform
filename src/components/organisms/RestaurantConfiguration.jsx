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
            <SelectField label="Locale Template" name="Locale Template" id="localetemp" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Menu Template" name="Menu Template" id="menutemp" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Operation Template" name="Operation Template" id="operntemp" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Center List" name="Center List" id="centerlist" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Room List" name="Room List" id="roomlist" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Menu Setting" name="Menu Setting" id="menuset" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Operation Setting" name="Operation Setting" id="opernset" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Payroll Setting" name="Payroll Setting" id="payrlset" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Labor Setting" name="Labor Setting" id="labrset" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Labour Rule" name="Labour Rule" id="lbrrule" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Period Rule" name="Period Rule" id="perdrule" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Routing Rule" name="Routing Rule" id="routrule" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Tax Rule" name="Tax Rule" id="taxrule" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Prerequisite Rule" name="Prerequisite Rule" id="prereq" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Tip Share" name="Tip Share" id="tipshare" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Clock-In Exception List" name="Clock-In Exception List" id="clock" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Tip Guide" name="Tip Guide" id="tipguide" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Offer" name="Offer" id="offr" />
          </Grid>
        </Grid>
      </div>
    </Accordion>
  );
};

export default RestaurantConfiguration;
