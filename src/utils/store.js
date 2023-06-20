import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import wishlistSlice from "./wishlistSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        wishlist:wishlistSlice,
        search:searchSlice,
        chat:ChatSlice
    }
})

export default store