import React from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {

      const navigate = useNavigate();

      return (

            <Box display="flex" flexDirection="column" alignItems="center" mt={10} gap={2}>
                  <Typography variant="h4" textAlign="center" gutterBottom>
                        Sign Up
                  </Typography>
                  <TextField
                        label="Username"
                        value=''
                        onChange=''
                        required

                  />
                  <TextField
                        label="Email"
                        type="email"
                        value=''
                        onChange=''
                        required

                  />
                  <Button variant="contained" onClick={() => navigate('/signup')}>Signup</Button>

            </Box>

      );
}

export default SignUpPage;
