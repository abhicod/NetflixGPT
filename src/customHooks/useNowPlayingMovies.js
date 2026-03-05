
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () =>{
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
    const dispatch = useDispatch();

  const getMovieData = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    !movies && dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() =>{
    getMovieData();
  },[])
  
}

export default useNowPlayingMovies;