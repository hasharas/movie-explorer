import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import { fetchTrendingMovies, searchMovies } from '../api/api'

const HomePage = () => {

      const [movies, setMovies] = useState([]);
      const [hasMore, setHasMore] = useState(true);
      const [query, setQuery] = useState('');
      const [page, setPage] = useState(1);

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

      const handleSearch = (searchText) => {
            setQuery(searchText);
            setPage(1);
            loadMovies(searchText, 1);
      };

      return (



            <Box sx={{ p: 3, minHeight: '100vh' }}>
                  <SearchBar
                        onSearch={handleSearch}
                  />
                  <Typography variant='h4' component='h1' sx={{ mt: 4, mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
                        {
                              query ? 'Search Results' : 'Trending Movies'
                        }
                  </Typography>

                  <Grid container spacing={3} justifyContent="center">
                        {movies.map((movie) => (
                              <Grid item key={movie.id} container xs={12} sm={6} md={4} lg={3} >
                                    <MovieCard movie={movie} />
                              </Grid>
                        ))}
                  </Grid>

            </Box >
      )
}

export default HomePage
