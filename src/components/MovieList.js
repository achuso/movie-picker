// src/components/MovieList.js
import React from 'react';
import MovieBox from './MovieBox';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieBox key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
