import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MovieDescription from './MovieDescription'
const Movie = ({movie}) => {
  const navigate = useNavigate()
  const fun=()=>{
    navigate(`/description/${movie.id}`,{state:{movie:movie}})
  }
     return (
      <button onClick={fun}>
    <div className='p-2 flex flex-col items-center justify-center gap-3'>
        <img className='w-[200px] h-[250px] md:h-[350px] md:w-[250px] rounded-md' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        alt={movie.original_title} />
        <p className='text-xl font-bold w-[200px] md:w-[250px]'>{movie.original_title}</p>
    </div>
    </button>
  )
}

export default Movie