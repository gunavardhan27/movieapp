import React from 'react'
import SearchBar from './SearchBar'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router';
const NavBar = () => {
    const navigate = useNavigate()
    function handle(){
        navigate('/search')
    }
    function handleFavourite(){
        navigate('/favourites')
    }
  return (
    <div className='h-14 w-full mb-6 flex flex-row items-start justify-between p-3'>
        <p className='basis-2/3 text-2xl md:text-3xl font-bold flex flex-row'>
            <p>Movie</p><p className='text-blue-800'>Plix</p>
        </p>
        <div className=' basis-1/3 flex flex-row items-center justify-center gap-1 md:gap-4'>
            <button onClick={handle} className='flex flex-row items-center justify-between'>
                Search   
            <CiSearch className='w-[30px] h-[30px]' />
            </button>
            <button className='p-2 bg-slate-100 rounded-md shadow-black shadow-md' onClick={handleFavourite}>Favourites</button>
        </div>
    </div>
  )
}

export default NavBar