import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import About from './Pages/About.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css"

 const router = createBrowserRouter([
  {path:'/',element:<App />},
   {path:'/about',element:<About />}
  ])






createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <RouterProvider router={router}>
   </RouterProvider>
  
  </StrictMode>
);
