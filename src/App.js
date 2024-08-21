import React, { useState } from 'react';
import PickMovies from './PickMovies';
import './App.css';

const App = () => {
  const [query, setQuery] = useState(''); 
  const [sortOrder, setSortOrder] = useState('asc');

  const { movies, loading } = PickMovies(query, sortOrder);

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.query.value);
  };

  const handleSort = () => {
    setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Search for movies..." />
        <button type="submit">Search</button>
      </form>
	  <br></br>
      <button onClick={handleSort}>
        Sort {sortOrder === 'asc' ? 'Non-Alphabetically' : 'Alphabetically'}
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

export default App;