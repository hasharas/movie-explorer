import { Box, Button, Chip, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../context/MovieContext';
import { getMovieDetails } from '../api/api';
import { Link, useParams } from 'react-router-dom';

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

      const handleFavorite = () => {
            const isFavorite = favorites.some((fav) => fav.id === movie.id);
            if (isFavorite) {
                  setFavorites(favorites.filter((fav) => fav.id !== movie.id));
            } else {
                  setFavorites([...favorites, movie]);
            }
      };

      if (!movie) return <Typography>Loading...</Typography>;

      const trailer = movie.videos?.results?.find((vid) => vid.type === 'Trailer');

      return (
            <Box maxWidth="md" mx="auto" p={3}>
                  <Typography variant='h3' fontWeight='bold' gutterBottom>
                        {movie.title}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary' gutterBottom>
                        Original Title: {movie.original_title} ({movie.original_language.toUpperCase()})
                  </Typography>

                  <Box my={3}>
                        <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path || movie.poster_path}`}
                              alt={movie.title}
                              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', objectFit: 'cover' }}
                        />
                  </Box>
                  <Typography variant="body1" paragraph>{movie.overview}</Typography>

                  <Box my={2}>
                        {movie.genres.map((genre) => (
                              <Chip key={genre.id}
                                    label={genre.name}
                                    color="primary"
                                    variant="outlined"
                                    sx={{ mr: 1, mb: 1 }}
                              />
                        ))}
                  </Box>

                  <Typography variant="body1"> <strong>Rating : </strong>{movie.vote_average} ⭐</Typography>
                  <Typography variant="body1"><strong>Release Date : </strong> {movie.release_date}</Typography>
                  <Typography variant="body1"><strong>Runtime : </strong> {movie.runtime} minutes</Typography>
                  <Typography variant="body1"><strong>Status : </strong> {movie.status}</Typography>

                  {movie.production_companies?.length > 0 && (
                        <Typography variant="body2" mt={1}>
                              Production Companies: {movie.production_companies.map((c) => c.name).join(', ')}
                        </Typography>
                  )}

                  {movie.spoken_languages?.length > 0 && (
                        <Typography variant="body2" mt={1}>
                              Languages: {movie.spoken_languages.map((lang) => lang.english_name).join(', ')}
                        </Typography>
                  )}

                  {movie.origin_country?.length > 0 && (
                        <Typography variant="body2" mt={1}>
                              Country: {movie.origin_country.join(', ')}
                        </Typography>
                  )}

                  {movie.belongs_to_collection && (
                        <Typography variant="body2" mt={1}>
                              Part of Collection: {movie.belongs_to_collection.name}
                        </Typography>
                  )}

                  {movie.homepage && (
                        <Typography variant="body2" mt={1}>
                              Homepage:{' '}
                              <Link href={movie.homepage} target="_blank" rel="noopener" underline="hover">
                                    {movie.homepage}
                              </Link>
                        </Typography>
                  )}

                  <Button variant={favorites ? "outlined" : "contained"}
                        color={favorites ? "secondary" : "primary"}
                        onClick={handleFavorite}
                        sx={{ my: 2 }}>

                        {favorites.some((fav) => fav.id === movie.id) ? "Remove from Favorites" : "Add to Favorites"}
                  </Button>
                  {trailer && (
                        <Box mt={2}>
                              <Typography variant="h5" gutterBottom>Trailer:</Typography>
                              <Box
                                    sx={{
                                          position: 'relative',
                                          paddingTop: '56.25%',
                                          borderRadius: '12px',
                                          overflow: 'hidden',
                                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                    }}>
                                    <iframe
                                          src={`https://www.youtube.com/embed/${trailer.key}`}
                                          title="Trailer"
                                          frameBorder="0"
                                          allowFullScreen
                                          style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                          }}
                                    ></iframe>
                              </Box>
                        </Box>
                  )}
            </Box>
      )
}

export default MovieDetailPage
