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



            <Box  >
                  <SearchBar
                        onSearch={handleSearch}
                  />
                  <Typography >
                        {
                              query ? 'Search Results' : 'Trending Movies'
                        }
                  </Typography>
                  <Grid container justifyContent={'center'}>
                        {movies.map((movie) => (
                              <MovieCard key={movies.id} movie={movie} />
                        ))}
                  </Grid>

            </Box>
      )
}

export default HomePage
