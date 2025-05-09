import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import { fetchTrendingMovies } from '../api/api'

const HomePage = () => {

      const [movies, setMovies] = useState([]);
      const [hasMore, setHasMore] = useState(true);

      const loadMovies = async (searchQuery = '', pageNumber = 1) => {
            try {
                  const newMovies = searchQuery
                        ? await searchMovies(searchQuery, pageNumber)
                        : await fetchTrendingMovies();
                  setMovies((prev) => (pageNumber === 1 ? newMovies : [...prev, ...newMovies]));
                  setHasMore(newMovies.length > 0);
            } catch (error) {
                  console.error(error);
            }
      };
      useEffect(() => {
            loadMovies();
      }, []);

      return (



            <Box  >

                  <SearchBar
                        onSearch=''

                  />
                  <Grid container justifyContent={'center'}>
                        {movies.map((movie) => (
                              <MovieCard key={movies.id} movie={movie} />
                        ))}
                  </Grid>

            </Box>
      )
}

export default HomePage
