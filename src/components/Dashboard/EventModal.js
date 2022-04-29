import React, {useState} from 'react';
// import Modal from 'react-modal'
import Datetime from 'react-datetime'
import {
    Alert,
    Container,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Modal,
    RadioGroup,
    Snackbar,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {makeStyles} from "@mui/styles";
import {Radio} from "@mui/icons-material";



const useStyles = makeStyles((theme) =>({
    fab: {
        position: "fixed !important",
        bottom: 20,
        right: 20
    },
    container: {
        width: "3000px !important",
        height: "700px",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto !important",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh"
        }
    },
    form: {
        padding: theme.spacing(2)
    },
    item:
        {
            marginBottom: theme.spacing(3)
        }
}))

const EventModal = ({isOpen, onClose, onEventAdded}) => {
    const [title, setTitle] = useState("")
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())

    const onSubmit = (event) => {
        event.preventDefault()
        onEventAdded({title, start, end})
        onClose()
    }

    // return (
        // <Modal isOpen={isOpen} onCloseRequestClose={onClose}>
        //     <form onSubmit={onSubmit}>
        //         <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        //
        //         <div>
        //             <label>Start Date</label>
        //             <Datetime value={start} onChange={date => setStart(date)} />
        //         </div>
        //
        //         <div>
        //             <label>End Date</label>
        //             <Datetime value={end} onChange={date => setEnd(date)}/>
        //         </div>
        //         <button>Save</button>
        //     </form>
        // </Modal>
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert (false);
    };
    return (
        <>
            <Modal open={isOpen} onClose={onClose}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete={"off"} onSubmit={onSubmit}>
                        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                        <div>
                            <label>Start Date</label>
                             <Datetime value={start} onChange={date => setStart(date)} />
                      </div>
                        <div>
                        <label>End Date</label>
                        <Datetime value={end} onChange={date => setEnd(date)}/>
                        </div>
                          <Button variant={"outlined"}>Save</Button>

                    </form>
                </Container>
            </Modal>
        </>
    );
    // );
};

export default EventModal;