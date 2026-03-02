import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();
    const getmovieData = async () =>{
        const data = await  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        const movieTrailers = json.results.filter(video => video.type === "Trailer");
        const trailer = movieTrailers.length ? movieTrailers.find(video => video.name === "Official Trailer" || video.name === "Trailer") : json.results[0];
        dispatch(addTrailerVideo(trailer));
       
    }

    useEffect(() =>{
        getmovieData();
    }, []);

};

export default useGetMovieTrailer;

