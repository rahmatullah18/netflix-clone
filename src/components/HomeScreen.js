import React from 'react'
import { request } from '../Request'
import Banner from './Banner'
import './HomeScreen.css'
import Navbar from './Navbar'
import Row from './Row'

export default function HomeScreen() {
  return (
    <div className='homescreen'>
      {/* navbar */}
      <Navbar />
      {/* content */}
      <Banner />
      {/* row */}
      <Row title='Netflix Original' fetchURL={request.fetchNetflixOriginals} />
      <Row title='Trending' fetchURL={request.fetchTrending} />
      <Row title='Top Rate' fetchURL={request.fetchTopRated} />
      <Row title='Action' fetchURL={request.fetchActionMovies} />
      <Row title='Comedy' fetchURL={request.fetchComedyMovies} />
      <Row title='Documentaries' fetchURL={request.fetchDocumentaries} />
      <Row title='Horror' fetchURL={request.fetchHorrorMovies} />
      <Row title='Romance' fetchURL={request.fetchRomanceMovies} />
    </div>
  )
}
