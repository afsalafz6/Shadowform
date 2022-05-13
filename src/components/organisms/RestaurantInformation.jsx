import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { PropTypes } from 'prop-types';
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

const RestaurantInformation = ({ inputValue, handleChange }) => {
  const { street, city, state, zip, fax, phone, email } = inputValue;
  const classes = useStyles();
  return (
    <Accordion headerText={'Restaurant Information'} isOpen={true}>
      <div>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField
              type="text"
              value={street}
              label="Street"
              name="street"
              id="street"
              placeholder="street"
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField
              type="text"
              value={city}
              label="City"
              name="city"
              id="city"
              placeholder="city"
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField
              type="text"
              value={state}
              label="State"
              name="state"
              id="state"
              placeholder="state"
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField
              type="text"
              value={zip}
              label="Zip"
              name="zip"
              id="zip"
              placeholder="zip"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField
              type="text"
              value={phone}
              label="Phone Number"
              name="phone"
              id="phone"
              placeholder="phone number"
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField
              type="text"
              value={fax}
              label="Fax"
              name="fax"
              id="fax"
              placeholder="fax"
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6} lg={6} sm={6} xs={6} className={classes.container}>
            <InputField
              type="text"
              value={email}
              label="Email"
              name="email"
              id="email"
              size="67"
              placeholder="email"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </div>
    </Accordion>
  );
};
RestaurantInformation.propTypes = {
  inputValue: PropTypes.object,
  handleChange: PropTypes.func
};
RestaurantInformation.defaultProps = {
  inputValue: { street:'', city:'', state:'', zip:'', fax:'', phone:'', email:'' },
  handleChange: () => {console.log("handleChange func is missing !!!");}
};

export default RestaurantInformation;
