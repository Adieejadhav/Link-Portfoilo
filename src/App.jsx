import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage'
import ProfilePreview from './pages/ProfilePreview'
import HomePage from './pages/HomePage';

function App() {
  const [formData, setformData] = useState([]);

  console.log(formData);
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profilePreview" element={<ProfilePreview/>} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
