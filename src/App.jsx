import { useState, useEffect } from 'react'
import api from './services/tmdb'
import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    api.get('/movie/popular')
      .then(response => {
        setFilms(response.data.results)
      })
  }, [])

  return (
    <div className="app">
      <h1>CinéSearch</h1>
      <div className="films-grid">
        {films.map(film => (
          <MovieCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}

export default App