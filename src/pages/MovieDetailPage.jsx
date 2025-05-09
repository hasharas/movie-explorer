import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../context/MovieContext';
import { getMovieDetails } from '../api/api';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {

      const { id } = useParams();
      const { favorites, setFavorites } = useContext(MovieContext);
      const [movie, setMovie] = useState(null);

      useEffect(() => {
            const fetchDetails = async () => {
                  try {
                        const data = await getMovieDetails(id);
                        setMovie(data);
                        console.log('movie data : ', data);

                  } catch (error) {
                        console.error(error);
                  }
            };
            fetchDetails();
      }, [id]);

      if (!movie) return <Typography>Loading...</Typography>;

      return (
            <Box m={2}>
                  <Typography variant='h4'>
                        {movie.title}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                        Original Title: {movie.original_title} ({movie.original_language.toUpperCase()})
                  </Typography>

                  <Box my={2}>
                        <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path || movie.poster_path}`}
                              alt={movie.title}
                              style={{ width: '100%', borderRadius: '8px' }}
                        />
                  </Box>
                  <Typography variant="subtitle1">{movie.overview}</Typography>
            </Box>
      )
}

export default MovieDetailPage
