import React from 'react';
import { useParams } from 'react-router-dom';

// Example movie data; replace with actual data fetching
const movies = [
  { imdbID: 'tt0111161', Title: 'The Shawshank Redemption', Year: '1994', Poster: 'https://via.placeholder.com/150', Actors: 'Tim Robbins, Morgan Freeman', Director: 'Frank Darabont', Description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
  // Add more movie details as needed
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.imdbID === id);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <h1>{movie.Title} ({movie.Year})</h1>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Description:</strong> {movie.Description}</p>
    </div>
  );
};

export default MovieDetail;
