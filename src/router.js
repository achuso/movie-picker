import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MovieBox from './components/MovieBox';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "movies/:imdbID",
    element: <MovieBox />,
  },
]);

export default router;
