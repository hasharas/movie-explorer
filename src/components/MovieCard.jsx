import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MovieCard = () => {
      return (
            <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardActionArea >
                        <CardMedia
                              component="img"
                              height="200"
                              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRLf-xxTWf-6JseTR7wnv-IRd8RnEB6XS4A&s"
                              alt="Movie Poster"
                              sx={{ objectFit: 'cover' }}
                              onClick={() => console.log('Movie clicked')}
                        />
                        <CardContent>
                              <Typography variant='h6'>
                                    Fast fureous 10
                              </Typography>
                              <Typography variant='body2' color="text.secondary">
                                    Action, Adventure, Crime
                                    2023
                              </Typography>
                        </CardContent>
                  </CardActionArea>

            </Card>
      )
}

export default MovieCard
