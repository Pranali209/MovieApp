import { combineReducers } from "@reduxjs/toolkit";

import SignInDetails from './Slice'

import LikedMovies from "./LikedMovies";

const appReducer = combineReducers(
    {
        SignUp : SignInDetails,
        LikedMovies : LikedMovies
    }
)
const rootReducer = (state, action) => {
    return appReducer(state, action)
  }

export default rootReducer;