import { useState, useEffect } from 'react'
import api from './services/tmdb'

function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    api.get('/movie/popular')
      .then(response => {
        console.log(response.data)
        setFilms(response.data.results)
      })
  }, [])

  return (
    <div>
      <h1>CinéSearch</h1>
    </div>
  )
}

export default App