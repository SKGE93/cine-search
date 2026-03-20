import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../services/tmdb'
import './Detail.css'

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
    <div className="detail">
      <button className="detail-back" onClick={() => navigate(-1)}>← Retour</button>
      <div className="detail-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
          width={200}
        />
        <div className="detail-info">
          <h1>{film.title}</h1>
          <p className="note">⭐ {film.vote_average.toFixed(1)}/10</p>
          <p>📅 {film.release_date}</p>
          <p>{film.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail