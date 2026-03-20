import './MovieCard.css'

function MovieCard({ film }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
        width={150}
      />
      <p>{film.title}</p>
    </div>
  )
}

export default MovieCard