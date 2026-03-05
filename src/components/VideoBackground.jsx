import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../customHooks/useGetMovieTrailer';


const VideoBackground = ({movieId}) => {
     
     const trailerVideo = useSelector(store => store.movies.trailerVideo);

     useGetMovieTrailer(movieId);
   
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
            <iframe 
                className="absolute top-1/2 left-1/2 w-full h-full min-w-screen min-h-screen transform -translate-x-1/2 -translate-y-1/2 object-cover"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&modestbranding=1&fs=0&showinfo=0&rel=0&iv_load_policy=3`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    </div>
  )
}

export default VideoBackground;

