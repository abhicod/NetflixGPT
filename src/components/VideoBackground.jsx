import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../customHooks/useGetMovieTrailer';


const VideoBackground = ({movieId}) => {
       
     const trailerVideo = useSelector(store => store.movies.trailerVideo);

     useGetMovieTrailer(movieId);
   
  return (
    <div>
        <div className="absolute w-full overflow-hidden">
            <iframe className="w-full h-screen object-cover" src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=YoGtFNcXQWcVNzYC&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&modestbranding=1&fs=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    </div>
  )
}

export default VideoBackground