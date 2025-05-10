
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { MovieContext } from './context/MovieContext';
import { useContext } from 'react';
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import Footer from './components/Footer';
import FavoritesPage from './pages/FavoritesPage';


function App() {

  const { darkMode } = useContext(MovieContext);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>


  )
}

export default App
