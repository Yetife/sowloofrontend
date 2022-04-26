import React, {useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import Testimonial from "./Testimonial";
import {makeStyles} from '@mui/styles'
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";
import {useTheme} from "@mui/material/styles";
import {testimonials} from "../../../data";

const useStyles = makeStyles(() =>({
    container : {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'noWrap',
        width: '180%',
        height: '350px',
        position: 'relative',
        padding: '30px 0',
        overflowX: 'auto',
        overflowY: 'hidden'
    },
}))

const Testimonials = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div style={{backgroundColor: '#282664', width: '100%', height: '550px', position: 'absolute'}}>
            <div style={{paddingTop: '50px'}}>
            <Typography variant="h5" noWrap component="div" sx={{color: 'white'}}>
                People Say About Sowloo
            </Typography>
            <Typography variant="h5" noWrap component="div" sx={{color: 'white'}}>
                10,000+ unique online content list designs
            </Typography>
            </div>

                <Grid item
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    className={classes.container}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Testimonial testimonial={testimonial} />
                            ) : null}
                        </div>
                    ))}
                </Grid>
            <div style={{display: 'flex'}}>
                <MobileStepper
                    variant="dots"
                    steps={testimonials.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{ margin: '10px auto' }}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === testimonials.length}>
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </div>
        </div>
    );
};

export default Testimonials;