import React from 'react';
import { PropTypes } from 'prop-types';
//import '@pwd/RoomEditor.scss';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TableStyle } from '@organisms';

const useStyles = makeStyles({
  root: {
    // border : "2px solid #2D2D2D",
    '& div': {
      position: 'relative',
      border: '1px solid #8E774D'
    }
  },
  tableSelector: {
    maxHeight: '20vh'
  },
  container: {
    minHeight: '80vh',
    minWidth: '100px',

  }
});

const RoomEditor = ({ }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0} className={classes.root}>
        <Grid item md={2} lg={2} sm={2} xs={2} className={classes.container}>
          Room
        </Grid>
        <Grid item md={8} lg={8} sm={8} className={classes.container}>
          Tile Area
        </Grid>
        {/* <Grid item xs={1} /> */}

        <Grid item md={2} lg={2} sm={2} className={classes.container}>
          Room Properties
        </Grid>
        <Grid item md={12} lg={12} sm={12} className={classes.tableSelector}>
          <TableStyle />
        </Grid>
      </Grid>
    </>
  );
};

RoomEditor.propTypes = {};

RoomEditor.defaultProps = {};

export default RoomEditor;
