import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        isLoading: false,
        value: 0,
    },
    reducers: {
        setLoading: (state, action): void => {
            state.isLoading = action.payload;
        },
        setLoadingValue: (state, action): void => {
            state.value = action.payload;
        },
    },
});

export const { setLoading, setLoadingValue } = loaderSlice.actions;
export default loaderSlice.reducer;