import { Grid } from '@mui/material'
import React from 'react'
import shape from '../../../assets/images/bg-shape.png'
import Navbar from '../../navbar/Navbar'
import Search from './Search'
import circle from '../../../assets/images/images-bg.png'

const SearchCourse = () => {
  return (
    <div style={{backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FE 100%)', backgroundSize:'cover', height: '700px', position: 'relative'}}>
      <img src={shape} style={{height: "500px", width: '80%', position: 'absolute', top: '0rem', left: '19.5rem'}} />
        <Grid container sx={{position: 'absolute', top: '2rem', left: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Grid item xs={5} >
            <Search />
          </Grid>
          <Grid item xs={5}>
            <img src={circle} />
          </Grid>
        </Grid>
    </div>
  )
}

export default SearchCourse