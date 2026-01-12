import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './containers/Login';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalstyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored"/>
  </StrictMode>,
);