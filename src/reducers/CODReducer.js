import {createSlice} from '@reduxjs/toolkit';

const initial = false

const CODReducer = createSlice({
  name: "COD",
  initialState:initial,
  reducers:{
    cash_on_delivery_applied: (state,action)=>{return action.payload;}
  }
})

export const CODAction = CODReducer.actions;

export default CODReducer;