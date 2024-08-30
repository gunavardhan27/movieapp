import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialMovieList = {movies:[],allMovies:[],genres:[]}

const movieSlice = createSlice({
    name:"list",
    initialState:initialMovieList, 
    reducers:{
        addMovies(state,action){
            state.movies = [...state.movies,action.payload.results]
            const newItems = []
            for(let i=0;i<20;i++){
                newItems.push(action.payload.results[i])
            }
            state.allMovies = [...state.allMovies,...newItems]
        },
        addGenres(state,action){
            state.genres = [...state.genres,...action.payload.genres]
            console.log(state.genres)
        }
    }
})

const store = configureStore({reducer:{movies:movieSlice.reducer}})
export const movieAction = movieSlice.actions
export default store