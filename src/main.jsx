import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Contactme from './pages/Contactme';
import Error from './pages/Error';
import Thankyou from './pages/Thankyou';
import Archive from './pages/Archive';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contactme',
        element: <Contactme />,
      },
      {
        path: '/thankyou',
        element: <Thankyou />,
      },
    ],
  },
  {
    path: '/archive',
    element: <Archive />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
