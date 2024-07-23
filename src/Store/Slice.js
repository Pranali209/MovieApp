import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    SignUpDetails: []
}

const SignInDetails = createSlice({
    name: "SignInDetails",
    initialState,
    reducers: {
        addDetails: (state, action) => {

            state.SignUpDetails.push(

                {
                    id: nanoid(),
                    email: action.payload.email,
                    password: action.payload.password,
                    loggedIn: true
                }
            )
        },
        Login: (state, action) => {
           state.SignUpDetails.map((user) => {
                if (user.email === action.payload.email && user.password === action.payload.password) {
                    user.loggedIn = true
                }

            })
        },
        LogOut: (state, action) => {
            
            const updatedSignUpDetails = state.SignUpDetails.map((user) => {
                if (user.id === action.payload[0].id) {
                   
                  return { ...user, loggedIn: false };
                }
                return user;
              });
              return {
                ...state,
                SignUpDetails: updatedSignUpDetails,
              };
            }
      

    }
})

export default SignInDetails.reducer;
export const { addDetails, Login, LogOut } = SignInDetails.actions;
