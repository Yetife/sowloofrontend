// import { makeStyles } from '@mui/styles';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent, CardMedia,
    Container, FormControl, Grid, Icon, InputLabel,
    makeStyles, MenuItem, Select,
    Typography
} from "@material-ui/core";
// import ListHeadlines from "./headline/ListHeadlines";
import {useEffect, useState} from "react";
import {Note, Notes, TextsmsSharp, Timer} from "@mui/icons-material";
import {categories} from "../../../data";
import {useSelector} from "react-redux";
import {selectAllContents} from "../../../features/content/contentSlice";
import Campaigns from "./Campaigns";


const useStyles = makeStyles((theme) => ({
    categorycontainer: {
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        alignItems: "center",
        maxWidth: "100%",
        padding: "0 15%",
        width: "100%",
        backgroundColor: "#EEF2F6",
        [theme.breakpoints.down("sm")]: {
            padding: "0 5%",
        },
    },
    box: {
        width: "100%",
        paddingBottom: 20,
        alignItems: "center"
    },
    catheading: {
        fontSize: '30px',
        fontWeight: '700',
        color: '#140342',
    },


}));

function FeaturedCamp() {
    const classes = useStyles();

    const [headlines, setHeadlines] = useState([]);
    const [page, setPage] = useState(9);
    const [numberofPages, setNumberOfPages] = useState(10)


    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState([0]);

    let limitsize = 24;


    return (
        <Container className={classes.categorycontainer}>
            <Grid>
                <Typography variant="h5" noWrap component="div" sx={{color: '#140342'}} className={classes.catheading}>
                    Top Social Media Campaigns
                </Typography>
                <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B'}}>
                    Let us help you automate your social media campaign.
                </Typography>
            </Grid>
            <Campaigns />
        </Container>
    );
}

export default FeaturedCamp;
