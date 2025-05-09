
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { MovieContext } from './context/MovieContext';
import { useContext } from 'react';
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import HomePage from './pages/HomePage';

import MovieDetailPage from './pages/MovieDetailPage';


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
        </Routes>
      </ThemeProvider>
    </>


  )
}

export default App
