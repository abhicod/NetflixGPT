import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../customHooks/useGetMovieTrailer';


const VideoBackground = ({movieId}) => {
       
     const trailerVideo = useSelector(store => store.movies.trailerVideo);

     useGetMovieTrailer(movieId);
   
  return (
    <div>
        <div className="absolute inset-0">
            <iframe className="w-full h-screen"  src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=YoGtFNcXQWcVNzYC&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    </div>
  )
}

export default VideoBackground