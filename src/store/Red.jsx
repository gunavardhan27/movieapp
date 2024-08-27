import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialMovieList = {movies:[]}

const movieSlice = createSlice({
    name:"list",
    initialState:initialMovieList, 
    reducers:{
        addMovies(state,action){
            state.movies = action.payload.results
        }
    }
})

const store = configureStore({reducer:{movies:movieSlice.reducer}})
export const movieAction = movieSlice.actions
export default store