import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import InputField from '../molecules/InputField'
import Grid from '@material-ui/core/Grid';
import Accordion from '../molecules/Accordion'
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        // border: "2px solid #2D2D2D",
        '& div': {
            position: 'relative',
        }
    },
    tableSelector: {
        maxHeight: '20vh'
    },
    container: {
        minHeight: '50px',
        minWidth: '100px',

    }
});


const Restaurant = () => {

    const classes = useStyles();

    return (
        <div>
            <Accordion headerText={'Restaurant Setup'} isOpen={true} />


            <div>

                <Grid container spacing={0} className={classes.root}>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField name="Restaurant" id="Rs1" placeholder='Label' />
                    </Grid>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField name="Concept" id="Rs2" placeholder='Concept Name' />
                    </Grid>
                    {/* <Grid item xs={1} /> */}

                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField name="Division" id="Rs3" placeholder='Label' />
                    </Grid>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField name="Region" id="Rs4" placeholder='Label' />
                    </Grid>


                </Grid>
                <Grid container spacing={0} className={classes.root}>
                    <Grid item md={6} lg={6} sm={6} xs={6} xs={3} className={classes.container}>
                        <InputField name="Description" id="Rs10" size='67' placeholder='Label' />
                    </Grid>

                </Grid>
            </div>

        </div>
    )
}
Restaurant.propTypes = {
    name: PropTypes.integer,
    id: PropTypes.string,
    size: PropTypes.string,
};
// Restaurant.defaultProps = {
//     name: '',
//     id: '',
//     size: '',
// };
export default Restaurant