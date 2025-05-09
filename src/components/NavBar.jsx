import { AppBar, Button, Link, Toolbar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
      return (
            <AppBar position="static" >
                  <Toolbar>
                        <Button color="inherit" component={NavLink} href="/">Home</Button>

                        <Button color="inherit" component={NavLink} href="/favorites">Favorites</Button>
                  </Toolbar>
            </AppBar>
      )
}

export default NavBar
