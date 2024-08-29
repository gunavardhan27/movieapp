import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie'
import Map from './Map'
const SearchBar = () => {
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
    val = 'search something...'
    }
    
  return (
    <div className='m-5 flex flex-col items-center justify-center gap-7'>
    <input className='bg-slate-400 h-[36px] w-[600px] rounded-md text-gray-800' onChange={(event)=>setValue(event.target.value)} type='text' />
    <Map movies={filteredData.slice(0,30)} alt={val} />

    </div>
  )
}

export default SearchBar