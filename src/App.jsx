import { useState, useEffect } from 'react'
import api from './services/tmdb'
import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  const [films, setFilms] = useState([])
  const [recherche, setRecherche] = useState('')

  useEffect(() => {
  const timer = setTimeout(() => {
    if (recherche === '') {
      api.get('/movie/popular')
        .then(response => setFilms(response.data.results))
    } else {
      api.get('/search/movie', { params: { query: recherche } })
        .then(response => setFilms(response.data.results))
    }
  }, 500)

  return () => clearTimeout(timer)
}, [recherche])

  return (
    <div className="app">
      <h1>CinéSearch</h1>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={recherche}
        onChange={e => setRecherche(e.target.value)}
        className="search-bar"
      />
      <div className="films-grid">
        {films.map(film => (
          <MovieCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}

export default App