import {createSlice} from '@reduxjs/toolkit';

const initial = {text:""}

const searchReducer = createSlice({
  name: "search",
  initialState:initial,
  reducers:{
    search_query: (state,action)=>{return action.payload;}
  }
})

export const searchAction = searchReducer.actions;

export default searchReducer;