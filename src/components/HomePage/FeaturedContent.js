import React from 'react'
import {Grid, Typography, Button, Card} from '@mui/material'
import {makeStyles} from '@mui/styles'
import Contents from "./PopularContents/Contents";
import arrow from '../../assets/images/arrow.png'

const useStyles = makeStyles(() =>({
    grid : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // flexWrap: 'wrap',
        margin: '0 10px',
        backgroundColor: '#282664',
        height: '50vh',
        // width: '100vw'
        width: '100%',
        // marginLeft: '100px'
        },
    content: {
        width: '100%',
        margin: '130px 0px',
        marginLeft: '250px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        },
    btn : {
        //   backgroundColor: '#6440FB',
        // color: 'white',
        marginTop: '30px',
        fontSize: '12px'
        }
    }))

const featuredContent = [
    {
        content: "Attention Single Mums... Struggling With Stretch Marks all Over Their Body",
        marketingGoals: "Sales",
        industry: "Skin care",
        wordCount: "15"
    },
    {
        content: "Models! You Too Can Get The Shape You Desire To Feature In Major Adverts",
        marketingGoals: "Engagement",
        industry: "Gym",
        wordCount: "10"
    },
]

const FeaturedContent = () => {
  const classes = useStyles()

  return (
      <div style={{marginTop: "80%"}}>
        <div className={classes.grid}>
            <div style={{textAlign: "left", marginLeft: '100px'}}>
              <Typography variant="h5" noWrap component="div" sx={{color: 'white', fontWeight: '700', fontSize: '30px'}}>
                  Featured Courses
              </Typography>
              <Typography variant="h6" noWrap component="div" sx={{color: 'white', fontWeight: '400', fontSize: '14px'}}>
                  Hand-picked Instructor and expertly crafted <br/> courses, designed for the modern students <br/> and entrepreneur.
              </Typography>
              <Button variant={'contained'} sx={{fontSize: '14px', marginTop: '50px'}}>
                  Browse All Contents <img src={arrow} />
              </Button>
            </div>
            <div className={classes.content}>
                {featuredContent.map((content, index) =>(
                    <Contents key={index} content={content} />
                ))}
            </div>
        </div>
      </div>
  )
}

export default FeaturedContent