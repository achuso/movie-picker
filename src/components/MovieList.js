import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <strong>{movie.Title}</strong> ({movie.Year})
          &nbsp;
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">
            IMDB Page
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
