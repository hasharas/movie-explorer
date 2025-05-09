import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {

      const navigate = useNavigate();
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');


      const handleSignUp = () => {
            localStorage.setItem('user', JSON.stringify({ username, password }));
            alert('User registered successfully!');
            // Redirect to home page after successful signup
            navigate('/');
      }

      return (

            <Box display="flex" flexDirection="column" alignItems="center" mt={10} gap={3} >
                  <Typography variant="h4" textAlign="center" gutterBottom>
                        Sign Up
                  </Typography>
                  <TextField
                        label="Username"
                        value={username}
                        type='text'
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
                  <Button variant="contained" onClick={handleSignUp}>Signup</Button>

            </Box>

      );
}

export default SignUpPage;
