import {createSlice} from "@reduxjs/toolkit"

const adminSlice=createSlice({
   name: "admin",
   initialState:{
  
    email:null,
    id:null,   
    isLoggedIn: false,
    token:null
   },
   reducers:{
    setAdmin: (state, action) => {
      
        state.email = action.payload.email;
       state.id=action.payload.id
        state.isLoggedIn = true;
        state.token=action.payload.token
      },
      resetAdmin: (state) => {
       
         state.email = null;
         state._id = null;
         state.isLoggedIn = false;
         state.token=null
       },
   }




})
export const { setAdmin, resetAdmin}  = adminSlice.actions;
export const  adminReducer= adminSlice.reducer;