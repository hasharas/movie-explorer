import { AppBar, Box, Button, IconButton, Menu, MenuItem, Switch, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const NavBar = () => {

      const { darkMode, setDarkMode } = useContext(MovieContext);
      const [anchorEl, setAnchoEl] = useState();
      const navigate = useNavigate();

      const handleMenuOpen = (event) => {
            setAnchoEl(event.currentTarget);
      };

      const handleMenuClose = () => {
            setAnchoEl(null)
      }
      return (
            <AppBar position="static" sx={{ backgroundColor: darkMode ? '#222' : '#1976d2' }}>
                  <Toolbar>
                        <Typography variant="h5" onClick={() => navigate('/home')} component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                              @ Movie Explorer
                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                              <Button color="inherit" component={Link} to="/home">Home</Button>
                              <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
                              <Button color="inherit" component={Link} to="/popular">Popular</Button>
                              <Button color="inherit" component={Link} to="/about">About Us</Button>
                        </Box>
                        {/* back ground color change */}
                        <Switch
                              checked={darkMode}
                              onChange={() => setDarkMode(!darkMode)}
                              color="default"
                        />


                        {/* mobile menu */}
                        <Box sx={{ display: { xs: 'block', md: 'none' }, }}>
                              <IconButton color="inherit" onClick={handleMenuOpen}>
                                    <MenuIcon />
                              </IconButton>
                        </Box>


                        <Menu
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}
                              onClose={handleMenuClose}
                              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                              <MenuItem component={NavLink} onClick={handleMenuClose} to='/home'>
                                    Home
                              </MenuItem>
                              <MenuItem component={NavLink} onClick={handleMenuClose} to='favorites'>
                                    Favorites
                              </MenuItem>
                              <MenuItem component={NavLink} onClick={handleMenuClose} to='popular'>
                                    Popular
                              </MenuItem>
                              <MenuItem component={NavLink} onClick={handleMenuClose} to='about'>
                                    About Us
                              </MenuItem>
                        </Menu>

                  </Toolbar>
            </AppBar>
      )
}

export default NavBar
