import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ThemeConxtext from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <ThemeConxtext>
        <App />
      </ThemeConxtext>
    </BrowserRouter>
  </StrictMode>
);
