import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputField from '../molecules/InputField';
import { PropTypes } from 'prop-types';
import Accordion from '../molecules/Accordion';

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
        <Accordion headerText={'Restaurant Setup'} isOpen={true}>
            <div>
                <Grid container spacing={0} >
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField name="Restaurant" id="rest" placeholder='restaurant' />
                    </Grid>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField name="Concept" id="concpt" placeholder='concept' />
                    </Grid>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField name="Division" id="div" placeholder='division' />
                    </Grid>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField name="Region" id="reg" placeholder='region' />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item md={6} lg={6} sm={6} xs={6} className={classes.container}>
                        <InputField name="Description" id="desc" size='67' placeholder='description' />
                    </Grid>
                </Grid>
            </div>
        </Accordion>
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
export default Restaurant;