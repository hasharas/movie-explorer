import { AppBar, Box, Button, Switch, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const NavBar = () => {

      const { darkMode, setDarkMode } = useContext(MovieContext);

      return (
            <AppBar position="static" sx={{ backgroundColor: darkMode ? '#222' : '#1976d2' }}>
                  <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                              @ Movie Explorer
                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                              <Button color="inherit" component={Link} to="/home">Home</Button>
                              <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
                              <Button color="inherit" component={Link} to="/popular">Popular</Button>
                              <Button color="inherit" component={Link} to="/about">About Us</Button>
                        </Box>
                        <Switch
                              checked={darkMode}
                              onChange={() => setDarkMode(!darkMode)}
                              color="default"
                        />


                        {/* mobite menu */}


                  </Toolbar>
            </AppBar>
      )
}

export default NavBar
