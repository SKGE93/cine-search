import { useState, useEffect } from 'react'
import api from '../services/tmdb'
import MovieCard from '../components/MovieCard'
import '../App.css'

function Home() {
  const [films, setFilms] = useState([])
  const [recherche, setRecherche] = useState('')
  const [loading, setLoading] = useState(false)

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(true)
    if (recherche === '') {
      api.get('/movie/popular')
        .then(response => {
          setFilms(response.data.results)
          setLoading(false)
        })
    } else {
      api.get('/search/movie', { params: { query: recherche } })
        .then(response => {
          setFilms(response.data.results)
          setLoading(false)
        })
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
    {loading ? (
      <p>Chargement...</p>
    ) : (
      <div className="films-grid">
        {films.map(film => (
          <MovieCard key={film.id} film={film} />
        ))}
      </div>
    )}
  </div>
)
}

export default Home