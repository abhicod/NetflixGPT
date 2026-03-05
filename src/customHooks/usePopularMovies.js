
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () =>{

    const movies = useSelector((store) => store.movies.popularMovies);
    const dispatch = useDispatch();

    const getMovieData = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        !movies && dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getMovieData();
    },[]);

}

export default usePopularMovies;