import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	movie:[]
}

const movieSlice = createSlice({
	name:"movie",
	initialState,
	reducers:{
		setMovies:(state,action)=>{
			state.movies=actual.payload;
		}
	}
})

export const {setMovies} = movieSlice.actions;
export const selectMovies = (state)=>state.movie.movies;
export default movieSlice.reducer;