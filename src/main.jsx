import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { FormProvider } from '../services/formContext.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Link-Portfoilo">
      <FormProvider>
        <App />
      </FormProvider>
    </BrowserRouter>
  </StrictMode>
);
