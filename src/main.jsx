import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { FormProvider } from '../services/formContext.jsx'

createRoot(document.getElementById('root')).render(

  <FormProvider>
    <App/>
  </FormProvider>

)
