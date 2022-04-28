import {createSlice} from '@reduxjs/toolkit';


const initial = {}

const userReducer = createSlice({
  name: "user",
  initialState:initial,
  reducers:{
    logged_user_in: (state,action)=>{return action.payload;},
    logged_out:(state,action)=>{return action.payload},
  }
})

export const userAction = userReducer.actions;


export default userReducer;