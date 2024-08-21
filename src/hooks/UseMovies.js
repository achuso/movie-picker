import { useState, useEffect } from 'react';

const API_KEY = '5a5bdff6';

const useMovies = (query, sortOrder) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async (imdbID) => {
      const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
      const data = await response.json();
      return data;
    };

    const fetchMovies = async () => {
      if (query) {
        setLoading(true);
        try {
          const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
          const data = await response.json();
          const movieDetails = await Promise.all(
            (data.Search || []).map((movie) => fetchMovieDetails(movie.imdbID))
          );
          setMovies(movieDetails);
        } catch (error) {
          console.error('Error:', error);
          setMovies([]);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMovies();
  }, [query]);

  const sortedMovies = movies.sort((a, b) => {
    if (sortOrder === 'asc') return a.Title.localeCompare(b.Title);
    return b.Title.localeCompare(a.Title);
  });

  return { movies: sortedMovies, loading };
};

export default useMovies;