import { Box, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext';

const SearchBar = ({ onSearch }) => {
      const { searchResults, setSearchResults } = useContext(MovieContext);

      const handleChange = (e) => {
            setSearchResults(e.target.value);
            onSearch(e.target.value);
      };

      return (
            <Box m={1}>
                  <TextField
                        fullWidth
                        label="Search for movies..."
                        variant="outlined"
                        value={searchResults}
                        onChange={handleChange}
                        wdth={500}
                        sx={{}}
                  />
            </Box>
      )
}

export default SearchBar
