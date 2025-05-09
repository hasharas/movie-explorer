import axios from 'axios';

const API_KEY = process.env.MOVIE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/';



const api = axios.create({
      baseURL: BASE_URL,
});



export const fetchTrendingMovies = async () => {
      try {
            const { data } = await api.get(`/trending/movie/week?api_key=${API_KEY}`);
            console.log('trending list', data);
            return data.results;
      } catch (error) {
            throw new Error('Failed to fetch trending movies');

      }
}