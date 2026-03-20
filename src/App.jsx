import { useState, useEffect } from 'react'
import api from './services/tmdb'
import MovieCard from './components/MovieCard'

function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    api.get('/movie/popular')
      .then(response => {
        setFilms(response.data.results)
      })
  }, [])

  return (
    <div>
      <h1>CinéSearch</h1>
      {films.map(film => (
        <MovieCard key={film.id} film={film} />
      ))}
    </div>
  )
}

export default App