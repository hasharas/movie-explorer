
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage';

function App() {
  return (

    <Routes>
      <Route path="/" element={< LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* <Route path="/home" element={<HomePage />} /> */}
    </Routes>

  )
}

export default App
