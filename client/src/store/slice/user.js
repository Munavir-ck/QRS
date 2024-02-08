import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
   name: "user",
   initialState:{
    name: null,
    email:null,
    id:null,   
    isLoggedIn: false,
    token:null
   },
   reducers:{
    setUser: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
       state.id=action.payload.id
        state.isLoggedIn = true;
        state.token=action.payload.token
      },
      resetUser: (state) => {
         state.name = null;
         state.email = null;
         state._id = null;
         state.isLoggedIn = false;
         state.token=null
       },
   }




})
export const { setUser, resetUser}  = userSlice.actions;
export const  userReducer= userSlice.reducer;