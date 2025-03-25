import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from './Pages/About.jsx';
import Dashboard from './Pages/Dashboard.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/dashboard', element: <Dashboard /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
