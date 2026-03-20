import { Link } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({ film }) {
  return (
    <Link to={`/film/${film.id}`} style={{ textDecoration: 'none' }}>
      <div className="movie-card">
        <img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
              : 'https://via.placeholder.com/150x225?text=No+Image'
          }
          alt={film.title}
          width={150}
        />
        <p>{film.title}</p>
      </div>
    </Link>
  )
}

export default MovieCard