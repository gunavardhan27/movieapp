import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie'
import Map from './Map'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router'
const SearchBar = () => {
  const navigate = useNavigate()
  function handle(){
    
    navigate('/')
  }
    const data = useSelector(state=>state.movies.allMovies)
    let val = 'Search Something....'
    const [search,setValue] = useState('')
    let filteredData = []
    if(search){
        filteredData = data.filter((item) =>
        item.original_title.toLowerCase().includes(search.toLowerCase())
    );
    val = 'No results found ....'
    }
    else{
    val = ''
    }
    
  return (
    <div className='p-4 flex flex-col items-center justify-center gap-7 bg-[#83B4FF]'>
      <FaArrowLeft className='top-0 left-0 absolute mt-4 w-[20px] h-[20px] ' onClick={handle} />
    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[50%]
     focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
     placeholder='Search here....'
     onChange={(event)=>setValue(event.target.value)} type='text' />
    {filteredData.length ? <Map movies={filteredData.slice(0,28)} alt={val} />:''}

    </div>
  )
}

export default SearchBar