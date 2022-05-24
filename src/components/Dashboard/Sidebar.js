import React from 'react';
import {makeStyles} from "@mui/styles";
import {Container, Typography} from "@mui/material";
import BookmarkIcon  from '@mui/icons-material/Bookmark';
import SettingsIcon  from '@mui/icons-material/Settings';
import ExitToAppIcon   from '@mui/icons-material/ExitToApp';
import MessageIcon from '@mui/icons-material/Message';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import EventIcon from '@mui/icons-material/Event';
import {Link, useNavigate} from "react-router-dom";
// import {useNavigate} from "react-router-dom"

const useStyles = makeStyles((theme) =>({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.secondary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]:{
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"
        },

    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            fontSize: "18px"
        },

    },
    item: {
        display: 'flex',
        alignItems: "center",
        marginBottom: theme.spacing(3),
        color: '#4F547B',
        [theme.breakpoints.up("sm")]:{
            marginTop: theme.spacing(3),
            cursor: "pointer",
        },
        '&:hover': {
            backgroundColor: '#9e86e0',
            borderColor: 'none',
            boxShadow: 'none',
            border: 'none',
            borderRadius: '16px',
            width: '200px',
            height: '35px',
            color: 'white',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#1A064F',
            borderColor: 'none',
            border: 'none',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
    }
}))
const Sidebar = () => {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <DashboardIcon className={classes.icon}/>
                <Typography className={classes.text}>Dashboard</Typography>
            </div>
            <div className={classes.item}>
                <ContentPasteSearchIcon className={classes.icon}/>
                <Typography className={classes.text}>My content</Typography>
            </div>
            <div className={classes.item}>
                <BookmarkIcon className={classes.icon}/>
                <Typography className={classes.text}>Bookmarks</Typography>
            </div>
            <div className={classes.item}>
                <MessageIcon className={classes.icon}/>
                <Typography className={classes.text}>Messages</Typography>
            </div>
            <div className={classes.item}>
                <CreateNewFolderIcon className={classes.icon}/>
                <Typography className={classes.text}>Create content</Typography>
            </div>
            <div className={classes.item}>
                <ReviewsIcon className={classes.icon}/>
                <Typography className={classes.text}>Reviews</Typography>
            </div>
            <div className={classes.item}>
                <SettingsIcon className={classes.icon}/>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <EventIcon className={classes.icon}/>
                <Typography className={classes.text} onClick={() => navigate("/dashboard/calendar")}>Create Campaign</Typography>
            </div>
        </Container>
    );
};

export default Sidebar;