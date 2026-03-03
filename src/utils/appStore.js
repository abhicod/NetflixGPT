import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import appConfigReducer from "./appConfigSlice";

const store = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        appConfig : appConfigReducer,

    },
});

export default store;



// to debug store state -- to know about the states.
// import { useStore } from "react-redux";
// const store = useStore();
// console.log(store.getState());