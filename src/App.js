import { useEffect, useState } from "react";
import Button from './components/Button'
import Movie from "./components/Movie";
import { useSelector } from "react-redux";
import store, { movieAction } from "./store/Red";
function App() {
    const apiKey = '0ce8eac61283ffd4295387973415cc89';
    const [page,setPage] = useState(1)
    
    const pageDecrease = ()=>{
      setPage(page-1)
    }
    const pageIncrease = ()=>{
      setPage(page+1)
      console.log(page)
    }
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
    useEffect(()=>{
      async function fun(){
        
        const response = await fetch(apiUrl)
        if(response.ok){
          const data = await response.json()
          store.dispatch(movieAction.addMovies(data))
        }
        else{
          const errorData = await response.json()
          console.log(errorData)
        }
      }
      fun()
  },[apiUrl])
  const movieData = useSelector(state=>state.movies.movies)
  return (
    <div className="bg-black">

    <div className="w-4/5 mx-auto my-6 shadow-black shadow-md">
      <div className="mx-auto grid grid-cols-3 items-center justify-center gap-4 p-4 w-[90%]">
        {movieData.map(movie=>(
          <Movie movie={movie} />
        ))}
      </div>
    </div>
    <div className="flex flex-row items-center justify-around">
      <Button toggle={pageDecrease} className={`${page===1 && 'hidden'} p-3 hover:bg-slate-700 bg-slate-400`}>Prev</Button>
      {page<45706 && <Button toggle={pageIncrease} className="p-3 hover:bg-green-600 bg-slate-400">Next</Button>}
    </div>
    </div>
  );
}

export default App;
