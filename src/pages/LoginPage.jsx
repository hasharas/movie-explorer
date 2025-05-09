import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
      return (

            <Box display="flex" flexDirection="column" alignItems="center" mt={10} gap={2}>
                  <Typography variant="h4" >
                        Login
                  </Typography>
                  <TextField
                        label="Email"
                        type="email"
                        value=''
                        onChange=''
                        required

                  />
                  <TextField
                        label="Password"
                        type="password"
                        value=''
                        onChange=''
                        required

                  />
                  <Button variant="contained" onClick=''>Login</Button>
                  <Button onClick=''>Go to Signup</Button>
            </Box>

      )
}

export default LoginPage
