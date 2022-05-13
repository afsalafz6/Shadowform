import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '../molecules/Accordion';
import SelectField from '../molecules/SelectField';
import InputField from '../molecules/InputField';

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

const GuestSatisfaction = () => {
  const classes = useStyles();
  return (
    <Accordion headerText={'Guest Satisfaction Survey (GSS)'} isOpen={true}>
      <div>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Default Survey for Restaurant" name="Default Survey for Restaurant" id="gs1" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Bar Survey Override" name="Bar Survey Override" id="gs2" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Dine in Survey Override" name="Dine in Survey Override" id="gs3" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="Takeout Survey Override" name="Takeout Survey Override" id="gs4" />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <SelectField label="ToGo-Online Survey Override" name="ToGo-Online Survey Override" id="gs5" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
            <InputField
              type="number"
              label="Legecy Restaurant Number"
              name="Legecy Restaurant Number"
              id="gs6"
              placeholder="Label"
            />
          </Grid>
        </Grid>
      </div>
    </Accordion>
  );
};

export default GuestSatisfaction;
