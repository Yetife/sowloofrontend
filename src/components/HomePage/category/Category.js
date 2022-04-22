import { Box, Card, CardContent, IconButton } from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles(() =>({
    card : {
        width: '20%',
        height: '10%',
        display: 'flex',
        flexWrap: 'nowrap',
        margin: '15px'
    },

    content : {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 20px',
        width: '100%',   
        },
    icon: {
      background: '#EEF2F6',
      borderRadius: '80px',
      padding: '15px',
      right: '20px',
      '&:hover': {
        background: '#6440FB'
      }
    }
    }))

const Category = ({category}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
           <IconButton>
             {<category.icon className={classes.icon}/>}
           </IconButton>
          <div style={{textAlign: 'left'}}>
              <div>{category.name}</div>
              <div style={{marginTop: '5px'}}>{category.content}</div>
          </div>
      </CardContent>
    </Card>
  )
}

export default Category