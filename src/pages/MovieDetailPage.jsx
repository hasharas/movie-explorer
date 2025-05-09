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

      if (!movie) return <Typography>Loading...</Typography>;
      const trailer = movie.videos?.results?.find((vid) => vid.type === 'Trailer');

      return (
            <Box maxWidth="md" mx="auto" p={3}>
                  <Typography variant='h3' fontWeight='bold' gutterBottom>
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

                  <Box my={2}>
                        {movie.genres.map((genre) => (
                              <Chip key={genre.id} label={genre.name} sx={{ marginRight: 1 }} />
                        ))}
                  </Box>

                  <Typography variant="body1">Rating: {movie.vote_average} ⭐</Typography>
                  <Typography variant="body1">Release Date: {movie.release_date}</Typography>
                  <Typography variant="body1">Runtime: {movie.runtime} minutes</Typography>
                  <Typography variant="body1">Status: {movie.status}</Typography>

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
                              <Link href={movie.homepage} target="_blank" rel="noopener">
                                    {movie.homepage}
                              </Link>
                        </Typography>
                  )}

                  <Button variant="contained" onClick='' sx={{ my: 2 }}>
                        favorit
                  </Button>
                  {trailer && (
                        <Box mt={2}>
                              <Typography variant="h6">Trailer:</Typography>
                              <iframe
                                    width="100%"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                    title="Trailer"
                                    frameBorder="0"
                                    allowFullScreen
                              ></iframe>
                        </Box>
                  )}
            </Box>
      )
}

export default MovieDetailPage
