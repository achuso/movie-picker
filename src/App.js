// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import useMovies from './hooks/UseMovies';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import SortButton from './components/SortButton';
import MovieDetails from './components/MovieDetails'; // Import the MovieDetails component

import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const { movies, loading } = useMovies(query, sortOrder);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <Router>
      <div className="App">
        <h1>Movie Search</h1>
        <SearchForm onSearch={handleSearch} />
        <br />
        <SortButton sortOrder={sortOrder} onSort={handleSort} />
        <br />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<MovieList movies={movies} />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
