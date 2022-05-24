import React, {useState} from 'react';
import Datetime from 'react-datetime'
import { Modal, Paper, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import {makeStyles} from "@mui/styles";
import {Link, Routes, Route,  useNavigate} from 'react-router-dom'
import Contents from "../HomePage/PopularContents/Contents";
import {contents} from "../../data";
import EditContent from "./EditContent";


const useStyles = makeStyles((theme) =>({
    container: {
        width: "100%",
        height: "730px",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto !important",
        display: 'flex',
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh"
        }
    },
    gridContainer: {
        margin: "0",
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column"
        }
        },
    close: {
        color: '#aaaaaa',
        float: 'right',
        top: 0,
        fontSize: '40px',
        // fontWeight: 'bold',
    '&:hover': {
        color: '#000',
        textDecoration: 'none',
        cursor: 'pointer'
}
        }
}))

const EventModal = ({isOpen, onClose, onEventAdded}) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())

    const [selectedContent, setSelectedContent] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        onEventAdded({title, start, end})
        onClose()
    }

    const classes = useStyles();


    return (
        <>
            <Modal open={isOpen} onClose={onClose}>
                <Paper className={classes.container}>
                    <Grid container spacing={2} className={classes.gridContainer}>
                        <Grid item sm={4}  xs={12} sx={{
                            overflowy: 'scroll',
                            position: 'sticky',
                            margin: '0px',
                            padding: '0px',
                            backgroundColor: 'grey',
                        }}>
                            <Contents setSelectedContent={setSelectedContent} selectedContent={selectedContent} />
                        </Grid>
                        <Grid item sm={5} xs={12}>
                           <EditContent setSelectedContent={setSelectedContent} selectedContent={selectedContent} />
                        </Grid>
                        <Grid item sm={3} xs={12}>
                            preview
                        </Grid>
                    </Grid>
                    <span className={classes.close} onClick={onClose}>&times;</span>
                </Paper>
            </Modal>
        </>
    );
};

export default EventModal;