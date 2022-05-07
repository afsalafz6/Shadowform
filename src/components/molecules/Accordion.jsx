import React from 'react'
import { useState } from 'react'
import { makeStyles, Grid } from '@material-ui/core';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: "#f3efef",
        // border: "2px solid #2D2D2D",
        '& div': {
            position: 'relative',
        }
    },

}));





const Accordion = (props) => {
    // const { headerText = "", ChildrenComponent = "", handleExpandState = () => { } };
    const classes = useStyles();
    // const [show, setShow] = useState(true)
    console.log(props)

    const handleAccordion = () => {
        alert("hii")



    };



    return (
        <div>
            <Grid container spacing={0} className={classes.root}>
                <Grid item md={11} lg={11} sm={11} xs={11} className={classes.container}>
                    <div>{props.headerText}</div>
                </Grid>
                <Grid item md={1} lg={1} sm={1} xs={1} className={classes.container}>
                    <div onClick={handleAccordion}>+</div>


                    {/* <div onClick={() => setShow(!show)}>
                        {show ? <IndeterminateCheckBoxOutlinedIcon /> :
                            <AddBoxOutlinedIcon />}</div> */}

                </Grid>
            </Grid>















            {/*  <h1>{headerText}</h1> */}

            {/* <h2 onClick={() => setShow(!show)}>

                {show ? <div style={{ width: "100%" }}><div className={classes.accordionCollapse} ><div>{props.headerText}</div><IndeterminateCheckBoxOutlinedIcon /></div></div> :
                    <div className={classes.accordionExpand}><div>{props.headerText}</div><AddBoxOutlinedIcon /></div>}


            </h2> */}

            {/* {show ? <div className={classes.mrg}></div> : null} */}

        </div>
    )
}


export default Accordion
