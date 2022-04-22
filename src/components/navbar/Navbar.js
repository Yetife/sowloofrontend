import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Container, Button, IconButton, MenuItem, Divider} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import group from '../../assets/icon/Group.png'
import {Link} from "react-router-dom";
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(() =>({

}))

const pages = [
  {
    name: 'Home',
    path: ""
  },
  {
    name: 'Content',
    path: "content"
  },
  {
    name: 'Events',
    path: "events"
  },
  {
    name: 'Blog',
    path: "blog"
  },
  {
    name: 'Pages',
    path: "pages"
  },
  {
    name: 'Contact',
    path: "contact"
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  return (
    <AppBar position="fixed" sx={{background: 'white', color: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
            SOWLOO
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem  sx={{ minHeight: "5px", height: '30px', color: "#EDEDED", marginTop: "20px"}}/>
          
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex', fontSize: "15px",  marginLeft: "7px"} }}>
            Explore
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem  style={{ minHeight: "10px", height: "30px", color: "#EDEDED", marginTop: "20px" }}/>


          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Link to={`/${page.path}`} style={{textDecoration: 'none'}}>
                    <Button disableRipple endIcon={page.name === "Contact"? null : <KeyboardArrowDownIcon/>} sx={{color: "black", padding: '2px', fontSize:"14px", border: "none", textTransform: 'capitalize'}}>{page.name}</Button>
                  </Link>
                </MenuItem>
              ))} 
          </Box>
          <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between' }}>
             <IconButton size="large" aria-label="search" color="inherit">
                  <SearchIcon sx={{padding: '3px'}} onClick={() => setOpen(true)}/>
             </IconButton>
           <Divider orientation="vertical" variant="middle" flexItem  style={{ minHeight: "30px", color: "gray", marginTop: "15px"}}/>
          <img src={group} style={{padding: '0 23px'}}/>
          <Divider orientation="vertical" variant="middle" flexItem  style={{ minHeight: "30px", color: "gray", marginTop: "15px"}}/>

            <Typography noWrap sx={{padding: '0 15px'}}>Log in</Typography>
            <Button variant="filled" sx={{ border: 'none', background: '#dedbf3', borderRadius: '60px', padding: '10px 30px', fontWeight: 'bold', color: '#6440FB', textTransform: 'capitalize'}}>Sign Up</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;