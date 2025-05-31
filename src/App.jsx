import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePreview from './pages/ProfilePreview';
import HomePage from './pages/HomePage';

function App() {
  const [formData, setFormData] = useState([]);

  console.log(formData);
  return (
    <BrowserRouter basename="/Link-Portfoilo">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profilePreview" element={<ProfilePreview />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
