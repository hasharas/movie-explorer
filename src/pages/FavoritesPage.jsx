import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {

      const { favorites } = useContext(MovieContext);

      return (
            <Box>
                  <Typography>
                        <Grid container justifyContent='center'>
                              {favorites.length > 0 ? (
                                    favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                              ) : (
                                    <Typography >No Favorite movies added... </Typography>
                              )

                              }
                        </Grid>
                  </Typography>

            </Box>
      );
}

export default FavoritesPage;
