import React from 'react'
import Movie from './Movie'
const Map = ({movies,alt}) => {
  return (
    <div className="w-4/5 mx-auto shadow-black shadow-md bg-[#030637] rounded-lg ">
      <div className="mx-auto grid  sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 p-4 w-[90%] text-white">
        {movies && movies.length ? movies.map(movie=>(
            <Movie key={movie.id} movie={movie} />
        )):alt}
      </div>
    </div>
  )
}

export default Map