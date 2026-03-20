import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../services/tmdb'

function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [film, setFilm] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/movie/${id}`)
      .then(response => {
        setFilm(response.data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Chargement...</p>

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Retour</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
        width={200}
      />
      <h1>{film.title}</h1>
      <p>⭐ {film.vote_average}/10</p>
      <p>📅 {film.release_date}</p>
      <p>{film.overview}</p>
    </div>
  )
}

export default Detail