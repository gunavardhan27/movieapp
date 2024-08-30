import React from 'react'
import Map from './Map'

const Favourites = () => {
  let favourites = []
  if(localStorage){
    favourites = JSON.parse(localStorage.getItem('favourites',favourites)) || []
  }
  return (
    <div className='flex flex-col items-center justify-center gap-8 bg-[#83B4FF] p-3 min-h-screen'>
      <p className='mt-4 text-3xl font-bold'>Your Favourites</p>
      <Map movies={favourites} alt='Loading' />
    </div>
  )
}

export default Favourites