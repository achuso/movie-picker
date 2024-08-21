import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieBox.css';

const MovieBox = ({ movie }) => {
  const { Title, Year, Poster, Actors, Director, imdbID } = movie;
  const navigate = useNavigate();

  const handleClick = () => {
    //window.open(`https://www.imdb.com/title/${imdbID}`, '_blank', 'noopener,noreferrer');
    navigate(`/movie/${imdbID}`, { state: { movie } });
  };

  return (
    <div className="movie-box" onClick={handleClick}>
      <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/150'} alt={`${Title} Poster`} />
      <div className="movie-details">
        <h3>{Title} ({Year})</h3>
        <p><strong>Actors:</strong> {Actors}</p>
        <p><strong>Director:</strong> {Director}</p>
      </div>
    </div>
  );
};

export default MovieBox;
