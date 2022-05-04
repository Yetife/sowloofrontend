// import { makeStyles } from '@mui/styles';
import {Box, Button, Card, CardContent, Grid, IconButton, InputBase, makeStyles, Typography} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
// import img from "../../assets/images/Group39.svg"
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import React from "react";
import {learnings} from "../../data";
// import styled from "@emotion/styled";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "750px",
        color: "white",
        backgroundColor: "#EEF1FC",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "#EEF1FC",
            color: "#555",
            border: "1px solid #ece7e7",
        },
    },
    rightsection: {
        paddingLeft: "21.71px",
        paddingRight: "198px",
        alignItems: "center",
        marginTop: theme.spacing(7),
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(0),
            marginTop: theme.spacing(-5),
            backgroundColor: "#EEF1FC",
            fontSize: "17px",
            width: "100%",
            // height: "45px",
            alignItems: "center",
            padding: "15px",
            // fontWeight: "bolder",

        },
    },
    leftsection: {
        paddingLeft: "277px",
        //paddingTop: "266px",
        alignItems: "center",
        marginTop: theme.spacing(20),
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#EEF1FC",
            color: "#555",
            // border: "1px solid #ece7e7",
            padding: "15px",
            width: "100%",
            marginTop: theme.spacing(10),
        },
    },

    headtext: {
        textAlign: "left",
        fontWeight: "700",
        fontSize: "50px",
        lineHeight: "55px",
        textTransform: "capitalize",
        fontFamily: "Ubuntu",
        color: "#202020",
        [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
            lineHeight: "40px",
            textAlign: "left",
            fontWeight: "bolder",
        },
    },
    subtitle: {
        textAlign: "left",
        width: "70%",
        marginBottom: theme.spacing(1),
        fontSize: "17px",
        lineHeight: "36px",
        fontWeight: "400",
        fontFamily: "Sora",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
            lineHeight: "26px",
            textAlign: "left",
            width: "100%",
            // fontWeight: "bolder",

        },
    },
    search: {
        //m: 1,
        width: '75%',
        borderRadius: '60px',
        borderColor: 'white',
        backgroundColor: 'white',
        margin: '30px 0',
        height: '12%',
        paddingLeft: "21px",
        display: "flex",
        alignItems: "left",
        [theme.breakpoints.down("sm")]: {
            fontSize: "17px",
            margin: '10px 0',
        },
    },
    subtrending: {
        color: '#140342',
        fontWeight: '200',
        fontSize: "15px",
        textAlign: "left",
        marginTop: theme.spacing('8'),
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
            marginTop: theme.spacing('4'),

        },
    },
    btn: {
        borderRadius: "5px",
        backgroundColor: "#160647",
        color: "white",
        width: "30%",
        height: "8%",
        fontWeight: "bold",
        fontSize: "16px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "17px",
            width: "100%",
            height: "45px",
            alignItems: "center",
            aligncenter: "center",
            // fontWeight: "bolder",

        },
    },
    image: {
        [theme.breakpoints.down("sm")]: {
            width: "95%",
            //padding: "-35px",
        },
    },
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: '250px',
        display: "none",
        [theme.breakpoints.up("sm")]: {
            height: '150',
        },
    },
    content : {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 0px',
        width: '100%',
    },
    icon: {
        background: '#EEF2F6',
        borderRadius: '80px',
        padding: '15px',
        right: '20px',
        '&:hover': {
            background: '#6440FB'
        }
    },
    catheading: {
        fontSize: '30px',
        fontWeight: '700',
        color: '#140342',
    },
    cathead: {
        fontSize: "17px",
        color: "#140342",
    },
    catsubhead: {
        fontSize: "13px",
        color: "#4F547B",
    }
}));

function Learning1() {
    const classes = useStyles();
    return (

        <div>
            <Grid container className={classes.learncontainer}>
                <Grid item sm={12} xs={12} className={classes.leftsection}>

                </Grid>
            </Grid>
        </div>

    );
}

export default Learning1;
