import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () =>{

    const dispatch = useDispatch();

    const getMovieData = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getMovieData();
    },[]);

}

export default usePopularMovies;