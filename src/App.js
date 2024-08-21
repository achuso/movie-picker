import React, { useState } from 'react';
import useMovies from './hooks/UseMovies';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import SortButton from './components/SortButton';
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
    <div className="App">
      <h1>Movie Search</h1>
      <SearchForm onSearch={handleSearch} />
      <br></br>
      <SortButton sortOrder={sortOrder} onSort={handleSort} />
      <br></br>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App;
