import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter([
  { path: "/", element: <About /> },     
  { path: "/todos", element: <App /> },   
  { path: "*", element: <h1>404 - Page Not Found</h1> } 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
