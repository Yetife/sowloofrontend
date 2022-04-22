import {InputBase, Typography} from '@mui/material'
import React from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) =>({
   container: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'left',
       justifyContent: 'space-between',
       textAlign: 'left',
       margin: '150px 0'
       },
    search: {
        m: 1,
        width: '75%',
         borderRadius: '60px',
        borderColor: 'white',
        backgroundColor: 'white',
        margin: '30px 0',
        height: '70px',
        display: "flex",
        alignItems: "center",
        '&:hover': {
            borderRadius: '16px 0px 16px 0px'
            }
   },
}))

const Search = () => {
    const classes = useStyles()
  return (
    <div className={classes.container}>
        <Typography variant="h4" noWrap component="div" gutterBottom sx={{color: '#140342', fontWeight: '700'}}>
            Find Your Preferred <br /><Typography variant="h4" component="span" sx={{color: '#6440FB', fontWeight: '700'}}>Contents</Typography> & Improve Your Skills
        </Typography>
        <Typography variant="h6" noWrap component="div" gutterBottom sx={{color: '#140342', fontWeight: '400', margin: '10px 0', textTransform: 'capitalize'}}>
            Build skills with courses, certificates, and degrees online from <br/>world-class universities and companies.
        </Typography>
        <FormControl variant="filled">
          <InputBase
            placeholder={"Search..."}
            endAdornment={<InputAdornment position="end"><SearchIcon style={{backgroundColor: '#6440FB', borderRadius: '50%', padding: '10px', marginRight: '20px'}}/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            className={classes.search}
                />
        </FormControl>
        <Typography variant="h6" noWrap component="div" sx={{color: '#140342', fontWeight: '400'}}>
            Trending Search: Development, Business, Design, Marketing 
        </Typography>
    </div>
  )
}

export default Search;
