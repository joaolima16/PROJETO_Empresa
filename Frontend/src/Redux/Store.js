import { configureStore } from "@reduxjs/toolkit";
import slice from "./Slice";
import thunk from "redux-thunk";
const store = configureStore({
    reducer:{
        sliceReducer: slice
    },
    middleware: [thunk]
})
export default store;