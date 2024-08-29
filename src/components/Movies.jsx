import React from 'react'
import Button from './Button'
import Map from './Map';
const Movies = ({page,pageDecrease,pageIncrease,movieData}) => {
  return (
    <div>
    <Map movies={movieData[page-1]} alt='Loading....' />
    <div className="flex flex-row items-center justify-around">
      <Button toggle={pageDecrease} className={`${page===1 && 'hidden'} p-3 hover:bg-slate-700 bg-slate-400`}>Prev</Button>
      {page<45706 && <Button toggle={pageIncrease} className="p-3 hover:bg-green-600 bg-slate-400">Next</Button>}
    </div>
    </div>
  )
}

export default Movies