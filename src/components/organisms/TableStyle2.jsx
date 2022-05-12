import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RestaurantSetup from './RestaurantSetup';
import RestaurantInformation from './RestaurantInformation';
import RestaurantConfiguration from './RestaurantConfiguration';
import GuestSatisfaction from './GuestSatisfaction';
import MpsSettings from './MpsSettings';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
      background:'white'
  }
}));

const TableStyle2 = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
          <Tab label="Menu" {...a11yProps(0)} />
          <Tab label="Operation" {...a11yProps(1)} />
          <Tab label="Location" {...a11yProps(2)} />
          <Tab label="Deployment" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <RestaurantSetup />
        <RestaurantInformation />
        <RestaurantConfiguration />
        <GuestSatisfaction />
        <MpsSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Hello
      </TabPanel>
      <TabPanel value={value} index={2}>
        Hiii
      </TabPanel>
      <TabPanel value={value} index={3}>
        Oval
      </TabPanel>
    </div>
  );
};

export default TableStyle2;
