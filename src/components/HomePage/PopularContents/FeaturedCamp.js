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
//import HeadlineService from "./HeadlineService";
import * as React from "react";
import {IconButton, Pagination, Stack} from "@mui/material";
//import Category from "./Category";
import FeedIcon from "@mui/icons-material/Feed";
import fashion from '../../../assets/images/fashion.jpg'
import skincare from '../../../assets/images/skincare.jpg'
import food from '../../../assets/images/food.jpg'
import consultant from '../../../assets/images/consultant.jpg'
import affiliate from '../../../assets/images/affiliate.jpeg'
import website from '../../../assets/images/website.jpg'
import logistics from '../../../assets/images/logistics.jpg'
import education from '../../../assets/images/education.png'
import NewspaperIcon from "@mui/icons-material/Newspaper";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import RadioIcon from "@mui/icons-material/Radio";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import img from "../../../assets/images/Group39.svg";
import {Note, Notes, TextsmsSharp, Timer} from "@mui/icons-material";


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
        maxHeight: "249px"
        //background: '#EEF2F6',
        //borderRadius: '80px',
        //padding: '15px',
        //right: '20px',
        // '&:hover': {
        //     background: '#6440FB'
        // }
    },
    catheading: {
        fontSize: '30px',
        fontWeight: '700',
        color: '#140342',
    },
    camphead: {
        textAlign: "left",
        fontSize: "16px",
        fontWeight: '500',
        lineHeight: '28px',
        color: "#140342",
    },
    campsub: {
        textAlign: "left",
        fontSize: "13px",
        color: "#4F547B",
    },
    avatar: {
        width: '20px',
        height: '20px',
    },
    days: {
        fontSize: '12px',
    },
    avatartext: {
        fontSize: '10px',
    },
    amount: {
        fontSize: '16px',
        fontWeight: '500',
        alignItems: 'right',
        justifyContent: 'center',
        position: 'relative',
        left: '40px',
        color: '#140342',
        // [theme.breakpoints.down("sm")]: {
        //     position: 'relative',
        //     left: '10px',
        // },
    },


}));

function FeaturedCamp() {
    const classes = useStyles();
    const categories = [
        {
            id: 1,
            icon: fashion,
            name: "30 Days Lead generation Campaign",
            content: '573+ Content'
        },
        {
            id: 2,
            icon: skincare,
            name: "Newsletter",
            content: '573+ Content'
        },
        {
            id: 3,
            icon: food,
            name: "Headlines",
            content: '573+ Content'
        },
        {
            id: 4,
            icon: consultant,
            name: "Blog Post",
            content: '573+ Content'
        },
        {
            id: 5,
            icon: affiliate,
            name: "Paid Advert",
            content: '573+ Content'
        },
        {
            id: 6,
            icon: website,
            name: "For website designers who need customers",
            content: '573+ Content'
        },
        {
            id: 7,
            icon: logistics,
            name: "Attract the right customers for your logistics business",
            content: '573+ Content'
        },
        {
            id: 8,
            icon: education,
            name: "The sales machine campaign for your coaching service",
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
                    Top Social Media Campaigns
                </Typography>
                <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B'}}>
                    Let us help you automate your social media campaign.
                </Typography>
            </Grid>
            <Grid container spacing={2} className={classes.stackrow}>

                {
                    categories.map(category =>
                        (
                            <Grid item xs={12} md={3} key={category.id}>

                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            style={{height: '250px'}}
                                            alt="green iguana"
                                            // height="140"
                                            //src={category.icon}
                                            image={category.icon}
                                            className={classes.icon}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" className={classes.camphead}>
                                                {category.name.substr(0, 50) + '...'}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" className={classes.campsub}>
                                                {category.content}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Timer sx={{ fontSize: 16 }}/>
                                        <Button className={classes.days} >30 Days</Button>
                                        <TextsmsSharp sx={{ fontSize: 16 }}/>
                                        <Button className={classes.days}>24 contents</Button>
                                    </CardActions>
                                    <div style={{borderTop: '0.5px solid #bfbfbf', width: '80%', alignItems: 'center', margin: '0 auto'}}></div>
                                    <CardActions >
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.avatar} />
                                        <Button className={classes.avatartext}>Solomon Archibong</Button>
                                        <Typography align="right" className={classes.amount}>₦ 15,000</Typography>
                                    </CardActions>
                                </Card>

                            </Grid>
                        ))
                }
            </Grid>


        </Container>

    );
}

export default FeaturedCamp;
