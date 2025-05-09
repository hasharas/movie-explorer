
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import { CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>


  )
}

export default App
