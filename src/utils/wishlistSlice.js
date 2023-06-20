import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        wishItems: []
    },
    reducers:{
        addWishlist:(state,action)=>{
            state.push(action)
        }
    }
})

export const {addWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer
