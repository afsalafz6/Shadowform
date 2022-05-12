import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputField from '../molecules/InputField';
import { useState } from 'react';
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

    const [inputValue, setInputValue] = useState({ restaurant: "", concept: "", division: "",region: "",description: "" });
    const { restaurant, concept, division, region, description } = inputValue;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
      console.log(inputValue);
    };

    return (
        <Accordion headerText={'Restaurant Setup'} isOpen={true}>
            <div>
                <Grid container spacing={0} >
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField type="text" value={restaurant} label="Restaurant" name="restaurant" id="rest" placeholder='restaurant' onChange={handleChange} />
                    </Grid>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField type="text" value={concept} label="Concept" name="concept" id="concpt" placeholder='concept' onChange={handleChange} />
                    </Grid>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField type="text" value={division} label="Division" name="division" id="div" placeholder='division' onChange={handleChange} />
                    </Grid>
                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.container}>
                        <InputField type="text" value={region} label="Region" name="region" id="reg" placeholder='region' onChange={handleChange} />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item md={6} lg={6} sm={6} xs={6} className={classes.container}>
                        <InputField type="text" value={description} label="Description" name="description" id="desc" size='67' placeholder='description' onChange={handleChange} />
                    </Grid>
                </Grid>
            </div>
        </Accordion>
    )
}
Restaurant.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.string,
};
// Restaurant.defaultProps = {
//     name: '',
//     id: '',
//     size: '',
// };
export default Restaurant;