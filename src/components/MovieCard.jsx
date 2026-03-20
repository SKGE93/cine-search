import './MovieCard.css'

function MovieCard({ film }) {
  return (
    <div>
      <img
  src={
    film.poster_path
      ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
      : 'https://via.placeholder.com/150x225?text=No+Image'
  }
  alt={film.title}
/>
      <p>{film.title}</p>
    </div>
  )
}

export default MovieCard