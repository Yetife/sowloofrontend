import React from 'react'
import {Grid, Typography, FormControl, Button, InputAdornment, Link, InputBase, alpha } from '@mui/material'
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) =>({
    grid : {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '25px'
        },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left'
},
    search: {
        display: "flex",
        alignItems: "center",
        height: '60px',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            borderRadius: '16px 0px 16px 0px'
        },
        borderRadius: '60px',
        marginTop: '10px'
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1)
    },
    }))

const AdditionalInfo = () => {
const classes = useStyles()
const categories = ["Social Media", "Newsletter", "Headlines", "Blog Post", "Paid Advert", "Radio Jingle", "Video Ad", "Testimonial"]
const infos = ["About Us", "Learner Stories", "Learner Stories", "Courses", "Press", "Leadership", "Contact Us"]
const others = ["Documentation", "FAQS", "Dashboard", "Contact"]

  return (
    <Grid container spacing={2} className={classes.grid}>
        <div className={classes.list}>
            <Typography variant="h6" noWrap component="div" sx={{color: '#140342', padding: '10px 0'}}>About Us</Typography>
            {infos.map((info, index) => (
                <Link key={index} href="#" underline="none" sx={{color: '#4F547B', padding: '5px'}}>{info}</Link>
                ))}
        </div>

        <div className={classes.list}>
            <Typography variant="h6" noWrap component="div" sx={{color: '#140342', padding: '10px 0'}}>Categories</Typography>
            {categories.map((category, index) => (
                <Link key={index} href="#" underline="none" sx={{color: '#4F547B', padding: '5px'}}>{category}</Link>
                ))}
        </div>

        <div className={classes.list} sx={{lineHeight: '1'}}>
            <Typography variant="h6" noWrap component="div" sx={{color: '#140342', padding: '10px 0'}}>Support</Typography>
            {others.map((other, index) => (
                <Link key={index} href="#" underline="none" sx={{color: '#4F547B', padding: '5px'}}>{other}</Link>
                ))}
        </div>

        <Grid>
            <Typography variant="h6" noWrap component="div" sx={{color: '#140342'}}>
                GET IN TOUCH
            </Typography>
            <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B', marginTop: '10px'}}>
                We don’t send spam so don’t worry.
            </Typography>
            <FormControl>
                <InputBase placeholder={"Email..."}
                           endAdornment={<InputAdornment position="end">
                               <Button variant="filled" sx={{background: 'blue', color: 'white', borderRadius: '60px', padding: '10px 20px', marginRight: '10px', textTransform: 'capitalize'}}>
                                   Submit
                               </Button>
                           </InputAdornment>}
                           className={classes.search}/>
            </FormControl>

        </Grid>
    </Grid>
  )
}

export default AdditionalInfo