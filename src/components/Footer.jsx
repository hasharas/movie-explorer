import { Box, Typography, Link as MuiLink } from '@mui/material'
import React from 'react'

const Footer = () => {
      return (
            //footer create aditionly 
            <Box
                  component="footer"
                  position="static"
                  sx={{
                        mt: 5,
                        py: 3,
                        px: 2,
                        textAlign: 'center',
                        backgroundColor: 'background.paper',
                        borderTop: '1px solid #ddd',
                  }}>
                  <Typography variant="body2" color="textSecondary">
                        © {new Date().getFullYear()} MovieApp. All rights reserved.
                  </Typography>
                  <Typography>
                        Developed By{' '}
                        <MuiLink
                              href="https://github.com/hasharas"
                              target="_blank"
                              rel="noopener"
                              underline="hover"
                        >
                              Hashara Sankalpa
                        </MuiLink>
                  </Typography>
            </Box>

      )
}

export default Footer
