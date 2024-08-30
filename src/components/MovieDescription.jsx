import React from 'react'
import { useLocation, useNavigate} from 'react-router'
import { FaRegStar } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const MovieDescription = () => {
  const genresData = useSelector(state=>state.movies.genres)
  
  const navigate=useNavigate()
  function handle(){
    navigate('/')
  }  
  const location = useLocation()
  const movie = location.state.movie
  let favourites = []
  if(localStorage){
    favourites = JSON.parse(localStorage.getItem('favourites')) || []
  }
  const newGenres = []
  movie.genre_ids.map((id)=>(
    genresData.map((genre)=>(
      genre.id === id && newGenres.push(genre.name)
    ))
  ))
  const genres = [... new Set(newGenres)]
  function handleAdd(){
    if (localStorage) {
        let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        favourites.push(movie);
        const fav = [...new Set(favourites)]
        localStorage.setItem('favourites', JSON.stringify(fav));
        navigate('/favourites')
    }
  }
  function handleRemove(){
    if (localStorage) {
        let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        const newFavourites = favourites.filter(mv=>(
          mv.id !== movie.id
        ))
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
        navigate('/favourites')
    }
  }


  return (
    <div className='p-2 bg-[#83B4FF] min-h-screen'>
      <FaCircleArrowLeft className='m-3 h-[40px] w-[40px]' onClick={handle} />
    <div className='flex flex-col md:flex-row items-center justify-center md:items-start md:justify-around gap-4 m-6 shadow-black shadow-lg bg-gray-400 p-2'>
    <img className='w-[90%] h-[150px] md:basis-1/2 md:h-[440px] rounded-md' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
    
    <div className='mb-2 w-[90%] md:basis-1/2 flex flex-col items-center justify-around'>
      <p className='text-3xl font-bold mb-4'>
      {movie.original_title}
      </p>
      <p className='w-full flex flex-col md:flex-row items-center justify-center gap-2'>
        {genres.map(genre=>(
          <p key={genre} className='p-2 rounded-2xl text-white bg-blue-700'>{genre}</p>
        ))}
        
      </p>
      <p className='flex flex-row items-center justify-center gap-1 mb-3 mt-3'>
      <FaRegStar className='text-yellow-500' />
       {movie.vote_average}
      </p>
      <p className='flex flex-col items-center justify-center gap-1'><p className='text-xl font-bold'>Release-Date:</p>
      <p className='text-lg'>{movie.release_date}</p></p>
      <p className='w-[95%] md:w-[80%] text-lg'>
      {movie.overview}
      </p>
      <div>
      {favourites.some(mv=>mv.id === movie.id) ? 
        <button className='p-2 bg-blue-300 rounded-md mt-4 shadow-black shadow-md' onClick={handleRemove}>Remove from Favourites </button>
      :
      <button className='p-2 bg-blue-300 rounded-md mt-4 shadow-black shadow-md' onClick={handleAdd}>Add to Favourites </button>
      }
      </div>
    </div>
    </div>
    </div>
  )
}

export default MovieDescription