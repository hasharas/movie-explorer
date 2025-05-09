import { Box } from '@mui/material'
import React from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

const HomePage = () => {
      return (
            <Box  >
                  <SearchBar
                        onSearch=''

                  />
                  <MovieCard />
                  <MovieCard />

            </Box>
      )
}

export default HomePage
