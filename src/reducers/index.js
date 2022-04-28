import {configureStore} from '@reduxjs/toolkit';

import userReducer from './userReducer';
import searchReducer from './seachReducer';
import cartReducer from './cartReducer';
import drawerReducer from './drawerReducer';
import couponReducer from './couponReducer';
import CODReducer from './CODReducer';


const rootStore = configureStore({
  reducer:{
    user : userReducer.reducer ,
    search: searchReducer.reducer,
    cart: cartReducer.reducer, 
    drawer: drawerReducer.reducer, 
    coupon : couponReducer.reducer,
    COD: CODReducer.reducer,

   },
}) 

export default rootStore;
