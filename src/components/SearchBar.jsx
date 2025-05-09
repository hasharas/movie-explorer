import { Box, TextField } from '@mui/material'
import React from 'react'

const SearchBar = () => {
      return (
            <Box m={2}>
                  <TextField
                        fullWidth
                        label="Search for movies..."
                        variant="outlined"
                        value=''
                        onChange=''
                        wdth={500}
                        sx={{}}
                  />
            </Box>
      )
}

export default SearchBar
