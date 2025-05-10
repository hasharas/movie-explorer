import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import genreMap from './genreMap';

const MovieCard = ({ movie }) => {

      const navigate = useNavigate();
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const genreNames = movie.genre_ids?.map(id => genreMap[id]).join(", ")

      return (
            <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardActionArea onClick={() => navigate(`/movie/${movie.id}`)}>
                        <CardMedia
                              component="img"
                              height="250"
                              image={imageUrl}
                              alt={movie.title}
                              sx={{ objectFit: 'cover' }}
                        // onClick={() => console.log('Movie clicked')}
                        />
                        <CardContent>
                              <Typography variant='h6' gutterBottom>
                                    {movie.title}
                              </Typography>

                              <Typography variant='body2' color="text.secondary">
                                    {movie.release_date}
                              </Typography>

                              <Box display={'flex'} alignItems={'center'} gap={1} mt={1}>
                                    <Rating value={movie.vote_average / 2} precision={0.5} readOnly />
                                    <Typography variant='body2'>
                                          {movie.vote_average.toFixed(1)}/10

                                    </Typography>
                              </Box>

                              {genreNames && (
                                    <Typography variant='body2' color='text.secondary' mt={1} >
                                          Genres : {genreNames}
                                    </Typography>
                              )
                              }
                              <Typography variant="body2" color="text.secondary" mt={1}>
                                    {movie.overview.length > 50 ? movie.overview.slice(0, 50) + "..." : movie.overview}
                              </Typography>
                        </CardContent>
                  </CardActionArea>

            </Card>
      )
}

export default MovieCard
