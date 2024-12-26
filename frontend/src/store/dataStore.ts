import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";

const dataStore = configureStore({
    reducer: {
        loader: loaderReducer,
    }
});

export default dataStore;