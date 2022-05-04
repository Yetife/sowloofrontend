// import { makeStyles } from '@mui/styles';
import {Box, Button, Grid, IconButton, InputBase, makeStyles, Typography} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import img from "../../../assets/images/Group39.svg"
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import React from "react";
// import styled from "@emotion/styled";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "750px",
        color: "white",
        //paddingTop: theme.spacing(10),
        backgroundColor: "#EEF1FC",
        // backgroundColor: theme.palette.primary.main,
        //position: "sticky",
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
        // '&:hover': {
        //     borderRadius: '16px 0px 16px 0px'
        // },
        [theme.breakpoints.down("sm")]: {
            fontSize: "17px",
            margin: '10px 0',
        //textAlign: "center",
        //width: "100%",
    // fontWeight: "bolder",

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
            //margin: '10px 0',

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
}));

function Banner() {
    const classes = useStyles();
    return (

        <div>
            <Grid container className={classes.container}>
                <Grid item sm={6} xs={12} className={classes.leftsection}>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        className={classes.headtext}>
                        The Smartest Social Media<br/>
                        Platform For Small Business Owners
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.subtitle}
                        gutterBottom component="div">
                        For Busy Small Business Owners
                        Who Needs Awareness & Wants To Post Everyday,
                        Sowlo is the Social Media Tool That Helps You Post Quality Contents Everyday.
                    </Typography>
                    {/*<FormControl variant="filled">*/}
                        <InputBase
                            placeholder={"What do you want to promote today?"}
                            endAdornment={<InputAdornment position="end"><SearchIcon style={{backgroundColor: '#6440FB', color: '#ffffff', borderRadius: '50%', padding: '10px', marginRight: '20px'}}/></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            className={classes.search}
                        />
                    {/*</FormControl>*/}
                    <Typography className={classes.subtrending} variant="h6" noWrap component="div" sx={{}}>
                        Trending Search: Development, Business, Design, Marketing
                    </Typography>
                </Grid>
                <Grid item sm={6} xs={12} alignItems="center" className={classes.rightsection}>
                    <Box component="img" src={img} className={classes.image}/>
                    {/*<Image src={img} width="50%" object-fit="contain"/>*/}
                </Grid>
            </Grid>
        </div>

    );
}

export default Banner;
