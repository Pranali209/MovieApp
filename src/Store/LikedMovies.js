import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

  LikedMovies: []
}

const MoviesList = createSlice({
  name: 'ListOfLikedMovies',
  initialState,
  reducers: {

    
    addMovie: (state, action) => {
      console.log(action.payload);
      const { userId,  userName , movie } = action.payload;
      state.LikedMovies.push({
        id: nanoid(),
        image: movie.Poster,
        name:movie.Title,
        year: movie.Year,
        type: movie.Type,
        userId: userId,
        username : userName
      })
    },
    removeMovie: (state, action) => {
      console.log(action);
      state.LikedMovies = state.LikedMovies.filter((movie) => movie.id !== action.payload.id)
    },

    clearMovies: (state, action) => {
      state.LikedMovies = []
    }

  }
})

export const { addMovie, removeMovie, clearMovies } = MoviesList.actions
export default MoviesList.reducer