import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter } from 'react-router-dom';
import Form from './Form.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
