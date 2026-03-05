import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovies: (state, action) =>{
            state.movieNames = action.payload.movieNames;
            state.movieResults = action.payload.movieResults;
        },
    }
});

export const { toggleGptSearchView, addGPTMovies } = gptSlice.actions;

export default gptSlice.reducer;
