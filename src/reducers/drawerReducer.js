import {createSlice} from '@reduxjs/toolkit';

const drawerReducer = createSlice({
  name: "drawer",
  initialState:false,
  reducers:{
    setVisible: (state,action)=>{return action.payload;},
  }
})

export const drawerAction = drawerReducer.actions;

export default drawerReducer;