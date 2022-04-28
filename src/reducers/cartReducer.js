import {createSlice} from '@reduxjs/toolkit';

let initial =  []
if (typeof window !== undefined){
    if (localStorage.getItem('cart')){
        initial = JSON.parse(localStorage.getItem('cart'))
    }else {
        initial = [];
    }
}

const cartReducer = createSlice({
  name: "cart",
  initialState:initial,
  reducers:{
    Add_To_Cart: (state,action)=>{return action.payload;},
  }
})

export const cartAction = cartReducer.actions;

export default cartReducer;