import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
      baseURL: BASE_URL,
      headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
});

export const fetchTrendingMovies = async () => {
      try {
            const { data } = await api.get('/trending/movie/week');
            console.log("trend list :", data)
            return data.results;
      } catch (err) {
            throw new Error('Failed to fetch trending movies');
      }
};

export const searchMovies = async (query, page = 1) => {
      try {
            const { data } = await api.get('/search/movie', {
                  params: { query, page },
            });
            return data.results;
      } catch (err) {
            throw new Error('Search failed');
      }
};

export const getMovieDetails = async (movieId) => {
      try {
            const { data } = await api.get(`/movie/${movieId}`, {
                  params: { append_to_response: 'videos,credits' },
            });
            return data;
      } catch (err) {
            throw new Error('Failed to fetch movie details');
      }
};
