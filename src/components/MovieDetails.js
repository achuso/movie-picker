import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <div>
      <h1>{movie.Title} ({movie.Year})</h1>
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'} alt={`${movie.Title} Poster`} />
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
