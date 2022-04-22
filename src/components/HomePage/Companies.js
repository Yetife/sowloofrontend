import { Typography, Grid, Divider } from '@mui/material'
import React from 'react'
import amazon from '../../assets/icon/Group(1).png'
import cisco from '../../assets/icon/Group(2).png'
import amd from '../../assets/icon/amd-logo-1-2.png'
import dropcam from '../../assets/icon/dropcam.png'
import logitech from '../../assets/icon/logitech-2-1-3-1.png'
import spotify from '../../assets/icon/Spotify-2-2.png'
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles(() =>({
    grid : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 20px',
        // width: '50%',   
        // marginLeft: '100px'
        },
    }))

const Companies = () => {
    const classes = useStyles()

    const companiesIcon = [
        {
            id: 1,
            icon: amazon
        },
        {
            id: 2,
            icon: amd
        },
        {
            id: 3,
            icon: cisco
        },
        {
            id: 4,
            icon: dropcam
        },
        {
            id: 5,
            icon: logitech
        },
        {
            id: 6,
            icon: spotify
        }
    ]

  return (
    <div style={{top: '50px', position: 'relative'}}>
        <Typography variant="h6" noWrap component="div" sx={{color: '#1A3454'}}>
            Trusted by companies of all sizes
        </Typography>
        <Grid item className={classes.grid}>
            {companiesIcon.map((company)=>(
            <img src={company.icon} style={{margin: '50px', top: '20px' }}/>
        ))}
        </Grid>
    </div>
  )
}

export default Companies