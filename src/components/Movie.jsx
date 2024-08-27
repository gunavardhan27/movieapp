import React from 'react'
import { Link } from 'react-router-dom'
import MovieDescription from './MovieDescription'
const Movie = ({movie}) => {
    console.log(movie.id)
     return (
    <div className='p-2 '>
        <Link to={`/description/${movie.id}`}></Link>
        <img className='h-[400px] w-[300px]' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" />
    </div>
  )
}

export default Movie