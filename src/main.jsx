import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import About from './Pages/About.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

 const router = createBrowserRouter([
  {path:'/',element:<App />},
   {path:'/about',element:<About />}
  ])



const CLIENT_ID = "187689512117-fgok49jrgdrlihu4t9mntnavm9ku0hd9.apps.googleusercontent.com"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
   <RouterProvider router={router}>
   </RouterProvider>
   </GoogleOAuthProvider>
  </StrictMode>
);
