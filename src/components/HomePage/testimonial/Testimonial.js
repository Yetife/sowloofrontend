import React from 'react';
import {Card, CardContent, IconButton, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles'
import img from '../../../assets/images/img.png'
import StarRating from "../../../reusables/StarRating";

const useStyles = makeStyles(() =>({
    card: {
        width: '50%',
        height: "200px",
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // // flexWrap: 'wrap',
        // margin: '15px',
        },
    content : {
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center',
        textAlign: 'left',
        fontSize: '14px',
        padding: '5px 15px',
        width: '100%',
    },
}))

const Testimonial = ({testimonial}) => {
    const classes = useStyles()
    return (
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <IconButton>
                        <img src={img}  alt={""} className={classes.img}/>
                    </IconButton>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', fontSize: '12px'}}>
                        <StarRating />
                        <Typography variant="h5" component="div" sx={{color: '#4F547B', fontSize: '14px', textAlign: 'left'}}>
                            {testimonial.text}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{color: '#140342', fontSize: '14px', textAlign: 'left'}}>
                            {testimonial.name}
                        </Typography>
                        <Typography variant="h5"  component="div" sx={{color: '#4F547B', fontSize: '14px',textAlign: 'left'}}>
                            {testimonial.jobTitle}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
    );
};

export default Testimonial;