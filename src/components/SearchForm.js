import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    navigate('/'); // Navigate back to the movie list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;