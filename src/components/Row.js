import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../axios'

export default function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([])
  console.log(movies);
  const getMovies = async () => {
    const requestApi = await axios.get(fetchURL)
    setMovies(requestApi.data.results)
  }

  useEffect(() => {
    getMovies()
  }, [fetchURL])
  const base_url = 'https://image.tmdb.org/t/p/original'
  return (
    <div className='row'>
      <h2 className='title'>{title}</h2>
      <div className='row__posters'>
        {
          movies?.map(movie => (
            <img key={movie?.id} src={`${base_url}${movie?.poster_path}`} alt={movie?.name} />
          ))
        }
      </div>
    </div>
  )
}
