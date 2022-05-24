// import { makeStyles } from '@mui/styles';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Container, FormControl, Grid, InputLabel,
    makeStyles, MenuItem, Select,
    Typography
} from "@material-ui/core";
// import ListHeadlines from "./headline/ListHeadlines";
import {useEffect, useState} from "react";
//import HeadlineService from "./HeadlineService";
import * as React from "react";
import {IconButton, Pagination, Stack} from "@mui/material";
import Category from "./Category";
import FeedIcon from "@mui/icons-material/Feed";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import RadioIcon from "@mui/icons-material/Radio";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
//import ReactPaginate from "react-paginate";
// import { useAnalytics } from 'use-analytics'
// import * as analytics from "analytics";
//import googleAnalytics, {track} from "@analytics/google-analytics";
//import Analytics from "analytics";
// import analytics from "analytics";
// import {Home} from "@mui/icons-material";

// const myPlugin = {
//     name: 'my-custom-plugin',
//     page: ({payload}) => {
//         console.log('page view fired', payload)
//     },
//     track: ({payload}) => {
//         console.log('track event payload', payload)
//     }
// }
//
// const analytics = Analytics({
//     app: 'writa',
//     plugins: [
//         myPlugin,
//         googleAnalytics({
//             trackingId: 'UA-222078699-1'
//         })
//     ]
// })

const useStyles = makeStyles((theme) => ({
    categorycontainer: {
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(10),
        alignItems: "center",
        // backgroundColor: "#fff7ff",
    },
    box: {
        width: "100%",
        paddingBottom: 20,
        alignItems: "center"
    },
    stackrow: {
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5),
    },
    post: {
        outline: "0 solid transparent",
        fontFamily: "Sora",
    },
    button: {
        color: "#160647",
        fontSize: 11,
        size: 'small',
    },
    pageLinkClassName: {
        color: "#160647",

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

function Cat1() {
    const classes = useStyles();
    const categories = [
        {
            icon: FeedIcon,
            name: "Social Media",
            content: '573+ Content'
        },
        {
            icon: NewspaperIcon,
            name: "Newsletter",
            content: '573+ Content'
        },
        {
            icon: NewReleasesIcon,
            name: "Headlines",
            content: '573+ Content'
        },
        {
            icon: CreateNewFolderIcon,
            name: "Blog Post",
            content: '573+ Content'
        },
        {
            icon: FeaturedVideoIcon,
            name: "Paid Advert",
            content: '573+ Content'
        },
        {
            icon: RadioIcon,
            name: "Radio Jingle",
            content: '573+ Content'
        },
        {
            icon: VideoLibraryIcon,
            name: "Video Ad",
            content: '573+ Content'
        },
        {
            icon: HistoryEduIcon,
            name: "Testimonials",
            content: '573+ Content'
        },
    ]

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
                    Top Categories
                </Typography>
                <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B'}}>
                    Lorem ipsum dolor sit amet, consectetur.
                </Typography>
            </Grid>
            <Grid container spacing={2} className={classes.stackrow}>
                {
                    categories.map(category =>
                        (
                            <Grid item xs={6} md={3} key={category.id}>

                                <Card className={classes.card}>
                                    <CardContent className={classes.content}>
                                        <IconButton>
                                            {<category.icon className={classes.icon}/>}
                                        </IconButton>
                                        <div style={{textAlign: 'left'}}>
                                            <Typography component="div" variant="h5" className={classes.cathead}>
                                                {category.name}
                                            </Typography>
                                            <Typography className={classes.catsubhead} variant="subtitle1" color="text.secondary" component="div">
                                                {category.content}
                                            </Typography>
                                            {/*<div>{category.name}</div>*/}
                                            {/*<div style={{marginTop: '5px'}}>{category.content}</div>*/}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                }
            </Grid>


        </Container>

    );
}

export default Cat1;
