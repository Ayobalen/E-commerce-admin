import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
       currentUser : null,
       isFetching: false,
         error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFaillure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
        }
    },
});

export const { loginStart, loginSuccess, loginFaillure } = userSlice.actions;
export default userSlice.reducer; 

