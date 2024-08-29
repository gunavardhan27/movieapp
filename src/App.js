import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import store, { movieAction } from "./store/Red";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
function App() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [page,setPage] = useState(1)
    const handle = (val)=>{
      setPage(val)
    }
    const pageDecrease = ()=>{
      setPage(page-1)
    }
    const pageIncrease = ()=>{
      setPage(page+1)
      console.log(page)
    }
        useEffect(()=>{
      async function fun(){
        for(let i=1;i<=500;i++){
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${i}`;
        const response = await fetch(apiUrl)
        if(response.ok){
          const data = await response.json()
          store.dispatch(movieAction.addMovies(data))
        }
        else{
          const errorData = await response.json()
          console.log(errorData)
        }
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      }
      fun()
  },[])
  const movieData = useSelector(state=>state.movies.movies)
  
  return (
    <div className="bg-[#83B4FF]">
      <NavBar />
      
    <Movies page={page} pageDecrease={pageDecrease} pageIncrease={pageIncrease} movieData={movieData} handle={handle} />
    </div>
  );
}

export default App;
