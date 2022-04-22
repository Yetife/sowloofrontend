import React, {useState} from 'react'
import {makeStyles} from '@mui/styles'
import {Button, Typography} from "@mui/material";
import Contents from "./Contents";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useTheme} from "@mui/material/styles";
import {contents} from "../../../data";


const useStyles = makeStyles(() =>({
    container: {
        backgroundColor: '#EEF2F6',
        width: '120%',
        height: '60vh',
        margin: '150px 0px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        },

    card : {
        width: '130%',
        margin: '130px 0px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn : {
        background: '#6440FB',
        position: 'absolute',
        borderColor: '#140342',
        borderRadius: '10px',
        top: '80%',
        right: '1000px'
        },
    arrowLeft: {
        width: '50px',
        height:' 50px',
        backgroundColor: '#4F547B',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0px',
        bottom: '0',
        left: '80px',
        margin: 'auto',
        cursor: 'pointer',
        opacity:' 0.5',
        zIndex: '2'
        },
    arrowRight: {
        width: '50px',
        height:' 50px',
        backgroundColor: '#4F547B',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        top: '0px',
        bottom: '0',
        left: '150px',
        margin: 'auto',
        cursor: 'pointer',
        opacity:' 0.5',
        zIndex: '2'
        }
    }))



const PopularContent = () => {
    const classes = useStyles()
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
    // <div style={{backgroundColor: '#EEF2F6', height: '300px',  margin: '100px 0px', width: '100%',  position: 'absolute',}}>
      <div className={classes.container}>
        <div style={{paddingTop: '50px', textAlign: 'center', marginLeft: '30%'}}>
            <Typography variant="h5" noWrap component="div" sx={{color: '#140342'}}>
                Our Most Popular Content
            </Typography>
            <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B'}}>
                10,000+ unique online content list designs
            </Typography>
        </div>
          <div className={classes.arrowLeft} >
              <ArrowBackIcon />
          </div>

        <div className={classes.card}>
            {contents.map((content, index) =>(
                <Contents key={index} content={content} />
            ))}
        </div>
          <div className={classes.arrowRight}>
              <ArrowForwardIcon />
          </div>

          <div>
              <Button  variant="contained" className={classes.btn}>
                  Browse All Content
              </Button>
          </div>

    </div>
  )
}

export default PopularContent