import React from 'react'
import Footer from './Footer'
import {makeStyles} from '@mui/styles'
import AdditionalInfo from './AdditionalInfo'
import Divider from '@mui/material/Divider'
import Social from './Social'

const useStyles = makeStyles(() =>({
    container: {
        height: '100%',
        backgroundColor: '#EEF2F6',
        marginTop: '36.5%'
        },
    }))

const Info = () => {
    const classes = useStyles()
  return (
    <div className={classes.container}>
        <Social />
        <Divider/>
        <AdditionalInfo />
         <Divider sx={{mt: '50px'}}/>
        <Footer />
    </div>
  )
}

export default Info