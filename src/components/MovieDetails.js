import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetails.css'; // Import the CSS file

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <div className="movie-details-container">
      <h1 className="movie-title">{movie.Title} ({movie.Year})</h1>
      <img 
        className="movie-poster" 
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'} 
        alt={`${movie.Title} Poster`} 
      />
      <div className="movie-info">
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;