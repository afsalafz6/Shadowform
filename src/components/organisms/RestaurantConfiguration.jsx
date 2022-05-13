import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { PropTypes } from 'prop-types';
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

const RestaurantConfiguration = ({ inputValue, handleChange }) => {
  const {
    localetemp,
    menutemp,
    operntemp,
    centerlist,
    roomlist,
    menusett,
    opernsett,
    paysett,
    laborsett,
    labourule,
    periodrule,
    routrule,
    taxrule,
    preqrule,
    tipshare,
    clockexcptn,
    tipguide,
    offer
  } = inputValue;
  const classes = useStyles();
  return (
    <Accordion headerText={'Restaurant Configuration'} isOpen={true}>
      <div>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Locale Template"
              name="localetemp"
              id="localetemp"
              value={localetemp}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Menu Template"
              name="menutemp"
              id="menutemp"
              value={menutemp}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Operation Template"
              name="operntemp"
              id="operntemp"
              value={operntemp}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Center List"
              name="centerlist"
              id="centerlist"
              value={centerlist}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Room List"
              name="roomlist"
              id="roomlist"
              value={roomlist}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Menu Setting"
              name="menusett"
              id="menuset"
              value={menusett}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Operation Setting"
              name="opernsett"
              id="opernset"
              value={opernsett}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Payroll Setting"
              name="paysett"
              id="payrlset"
              value={paysett}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Labor Setting"
              name="laborsett"
              id="labrset"
              value={laborsett}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Labour Rule"
              name="labourule"
              id="lbrrule"
              value={labourule}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Period Rule"
              name="periodrule"
              id="perdrule"
              value={periodrule}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Routing Rule"
              name="routrule"
              id="routrule"
              value={routrule}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Tax Rule"
              name="taxrule"
              id="taxrule"
              value={taxrule}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Prerequisite Rule"
              name="preqrule"
              id="prereq"
              value={preqrule}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Tip Share"
              name="tipshare"
              id="tipshare"
              value={tipshare}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Clock-In Exception List"
              name="clockexcptn"
              id="clock"
              value={clockexcptn}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Tip Guide"
              name="tipguide"
              id="tipguide"
              value={tipguide}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField
              label="Offer"
              name="offer"
              id="offr"
              value={offer}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </div>
    </Accordion>
  );
};
RestaurantConfiguration.propTypes = {
  inputValue: PropTypes.object,
  handleChange: PropTypes.func
};
RestaurantConfiguration.defaultProps = {
  inputValue: '',
  handleChange: () => {console.log("handleChange func is missing !!!");}
};

export default RestaurantConfiguration;
