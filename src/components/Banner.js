import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { request } from '../Request'
import './Banner.css'

export default function Banner() {
  const [movie, setMovie] = useState([])
  // function getMovies
  const getMovies = async () => {
    const requestAPI = await axios.get(request.fetchNetflixOriginals)
    const indexRandom = Math.floor(Math.random() * requestAPI.data.results.length - 1)
    const movieRandom = requestAPI.data.results[indexRandom]
    setMovie(movieRandom)
  }

  useEffect(() => {
    getMovies()
  }, [])


  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }
  return (
    <div className='banner' style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
    }}>
      <div className='banner__content'>
        <h1 className='banner__title'>{movie?.name || movie?.original_name}</h1>
        <div className='banner__buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <div className="banner__description">
          {
            truncate(`${movie?.overview}`, 150)
          }
        </div>
        <div className="banner__fadeBottom"></div>
      </div>
    </div>
  )
}
