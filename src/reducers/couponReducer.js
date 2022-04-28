import {createSlice} from '@reduxjs/toolkit';

const initial = false

const couponReducer = createSlice({
  name: "coupon",
  initialState:initial,
  reducers:{
    coupon_applied: (state,action)=>{return action.payload;}
  }
})

export const couponAction = couponReducer.actions;

export default couponReducer;