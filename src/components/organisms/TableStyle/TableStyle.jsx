import React,{useState}  from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { TablePalette} from "@molecules";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
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
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const squareTablePaletteData = [
   {label : "1" ,className : "sq1", onclick : () => {}},
   {label : "2" , className : "sq2",onclick : () => {},variant : "contained",size :"small"},
   {label : "3" , className : "sq3",onclick : () => {},variant : "secondary",size :"medium"},
   {label : "4" , className : "sq4",onclick : () => {},variant : "danger" ,size : "large"},
];

const roundTablePaletteData = [
  {label : "1" ,className : "rd1", onclick : () => {}},
  {label : "2" ,className : "rd2", onclick : () => {},variant : "contained",size :"small"},
  {label : "3" , className : "rd3",onclick : () => {},variant : "secondary",size :"medium"},
  {label : "4" ,className : "rd4", onclick : () => {},variant : "danger",size : "large"},
];

const rectAngleTablePaletteData = [
  {label : "1" , className : "re1",onclick : () => {}},
  {label : "2" ,className : "re2", onclick : () => {},variant : "contained",size :"small"},
  {label : "3" , className : "re3",onclick : () => {},variant : "secondary",size :"medium"},
  {label : "4" , className : "re4",onclick : () => {},variant : "danger",size : "large"},
];



const TableStyle = ()  => {
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
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Round" {...a11yProps(0)} />
          <Tab label="Square" {...a11yProps(1)} />
          <Tab label="Rectangle" {...a11yProps(2)} />
          <Tab label="Oval" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TablePalette paletteData={roundTablePaletteData} shape="round"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <TablePalette paletteData={squareTablePaletteData} shape="square" />
      </TabPanel>
      <TabPanel value={value} index={2}>
         <TablePalette paletteData={rectAngleTablePaletteData} shape="rectangle" />
      </TabPanel>
      <TabPanel value={value} index={3}>
          Oval
      </TabPanel>

    </div>
  );
}

export default TableStyle;
