import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import './index.css';
import Equipes from './pages/Equipes/Equipes';
import Home from './pages/Home/Home';
import Transmissoes from './pages/Transmissoes/Transmissoes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/equipes", element: <Equipes /> },
      { path: "/transmissoes", element: <Transmissoes /> },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
