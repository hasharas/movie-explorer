import { AppBar, Button, Switch, Toolbar } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const NavBar = () => {

      const { darkMode, setDarkMode } = useContext(MovieContext);

      return (
            <AppBar position="static" >
                  <Toolbar>
                        <Button color="inherit" component={Link} to="/home">Home</Button>

                        <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
                        <Switch
                              checked={darkMode}
                              onChange={() => setDarkMode(!darkMode)}

                        />
                  </Toolbar>
            </AppBar>
      )
}

export default NavBar
