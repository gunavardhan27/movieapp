import React from 'react'
import Map from './Map'

const Favourites = () => {
  let favourites = []
  if(localStorage){
    favourites = JSON.parse(localStorage.getItem('favourites',favourites)) || []
  }
  return (
    <div className='flex flex-col items-center justify-center gap-8 m-4'>
      <p>Your Favourites</p>
      <Map movies={favourites} alt='Loading' />
    </div>
  )
}

export default Favourites