import React from 'react'
import Map from './Map'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router'
const Favourites = () => {
  const navigate = useNavigate()
  function handle(){
    navigate('/')
  }  
  let favourites = []
  if(localStorage){
    favourites = JSON.parse(localStorage.getItem('favourites',favourites)) || []
  }
  return (
    <div className='flex flex-col items-center justify-center gap-8 bg-[#83B4FF] p-3 min-h-screen'>
      <FaCircleArrowLeft className='m-3 h-[40px] w-[40px] top-0 left-3 absolute' onClick={handle} />
      <p className='mt-4 text-3xl font-bold'>Your Favourites</p>
      <Map movies={favourites} alt='Loading' />
    </div>
  )
}

export default Favourites