import React from 'react'
import {Typography} from '@mui/material'
import img1 from '../../assets/icon/Group(3).png'
import img2 from '../../assets/icon/Group(4).png'
import img3 from '../../assets/icon/online-learning (3).png'
import img4 from '../../assets/icon/Group(5).png'
import {learnings} from "../../data";

const Learning = () => {

  return (
    <div style={{position: 'absolute', marginTop: '45%'}}>
        <Typography variant="h5" noWrap component="div" sx={{color: '#140342', fontWeight: '700', fontSize: '24px'}}>
          Start your Learning Journey Today!
      </Typography>
       <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B', fontSize: '12px', fontWeight: '400'}}>
          Lorem ipsum dolor sit amet, consectetur.
      </Typography>

      <div style={{display: 'flex', justifyContent: 'center', margin: '70px 100px'}}>
        {learnings.map((learning, index) => (
            <div>
            <img src={learning.icon} style={{background: `${learning.color}`, borderRadius: '80px', padding: '20px'}}/>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
            <Typography variant="h5" component="div" sx={{color: '#140342'}}>
                {learning.title}
            </Typography>
            <Typography variant="h6" component="div" sx={{width: '70%', textAlign: 'center', paddingLeft: '50px', fontSize: '14px', color: '#4F547B'}}>
                {learning.text}
            </Typography>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Learning