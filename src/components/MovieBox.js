import './MovieBox.css';

const MovieBox = ({ movie }) => {
    const { Title, Year, Poster, Actors, Director } = movie;
  
    return (
      <div className="movie-box">
        <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/150'} alt={`${Title} Poster`} />
        <div className="movie-details">
          <h3>{Title} ({Year})</h3>
          <p><strong>Director:</strong> {Director}</p>
          <p><strong>Actors:</strong> {Actors}</p>
        </div>
      </div>
    );
  };
  
  export default MovieBox;