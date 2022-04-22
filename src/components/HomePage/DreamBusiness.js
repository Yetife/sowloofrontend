import React from 'react';
import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Button from "@mui/material/Button";
import img from '../../assets/images/images-bg(2).png'

const useStyles = makeStyles(() =>({
    grid : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
}))

const DreamBusiness = () => {
    const classes = useStyles()
    return (
        <div >
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={4} sx={{textAlign: 'left'}}>
                    <Typography variant="h6" noWrap component="div" sx={{color: '#202124', fontSize: '40px', fontWeight: '700'}}>
                        Land your dream job in <br/>
                        data science
                    </Typography>
                    <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B', fontSize: '14px', fontWeight: '400', marginTop: '10px'}}>
                        From a certification in data science to personalized resume reviews and <br/> interview prep—we've got you covered.
                    </Typography>
                    <Button variant="outlined" sx={{marginTop: '50px'}}>
                        Learn More
                    </Button>
                </Grid>

                <Grid item sx={4}>
                    <img src={img} />
                </Grid>
            </Grid>
        </div>
    );
};

export default DreamBusiness;