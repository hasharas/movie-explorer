import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

      const navigate = useNavigate();
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');


      // Handle login function normal add this not fully work normaly can go home page 
      // because i have not add the backend part yet
      const handleLogin = () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user.username === username && user?.password === password) {
                  alert('Login successful!');
                  // Redirect to home page after successful login
                  navigate('/home');
            } else {
                  alert('Invalid username or password!');
            }
      }


      return (

            <Box display="flex" flexDirection="column" alignItems="center" mt={10} gap={3} >
                  <Typography variant="h4" >
                        Login
                  </Typography>
                  <TextField
                        label="Username"
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required

                  />
                  <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required

                  />
                  <Button variant="contained" onClick={handleLogin}>Login</Button>
                  <Button onClick={() => navigate('/signup')}>Go to Signup</Button>
            </Box>

      )
}

export default LoginPage
