import React from 'react'
import Button from './Button'
import Map from './Map';
const Movies = ({page,pageDecrease,pageIncrease,movieData,handle}) => {
  return (
    <div className=''>
    <Map movies={movieData[page-1]} alt='Loading....' />
    <div className="flex flex-row items-center justify-center mt-3 gap-3">
      <Button toggle={pageDecrease} className={`${page===1 && 'hidden'} p-2 hover:bg-blue-400 rounded-md`}>Prev</Button>
      {[page,page+1,page+2].map(val=>(
        <button className={`px-2 rounded-full ${page===val && 'bg-blue-900 text-white'} rounded-full`} onClick={()=>handle(val)}>{val}</button>
      ))}
      {movieData && page<45706 && <Button toggle={pageIncrease} className="p-2 hover:bg-blue-400 rounded-md">Next</Button>}
    </div>
    </div>
  )
}

export default Movies