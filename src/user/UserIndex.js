import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width:'auto',
        minHeight:'90vh',
        margin:0,
    },

}));



export default function UserIndex(){

    const classes = useStyles();


    return(
        <>
        <Typography component="div" className={classes.root}>
        <Typography component="h2" >user interfaces</Typography>
        </Typography>
     </>
     )
}