import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const MovieDescription = ({data}) => {
    const {id} = useParams()
    const movies = useSelector(state=>state.movies.movies)
    console.log(movies[id])
  return (
    <div>{data.original_title}</div>
  )
}

export default MovieDescription