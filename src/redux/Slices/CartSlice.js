import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:'cart',
initialState:[],
reducers:{
    add:()=>{},
    remove:()=>{},
}
})

export default CartSlice.reducer;
export const {add,remove}=CartSlice.actions;