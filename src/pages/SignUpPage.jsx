import React from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';


const SignUpPage = () => {

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
                  <Button variant="contained" onClick=''>Signup</Button>

            </Box>

      );
}

export default SignUpPage;
