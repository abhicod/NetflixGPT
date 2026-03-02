import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainBrowseContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // console.log(movies);

    if(!movies) return;
  // console.log(movies);
    const mainMovie = movies[Math.floor(Math.random() * movies.length)];
   

  return (
    <div>
        <div className='h-screen relative z-10'>
            <VideoTitle movie={mainMovie}/>
            <VideoBackground movieId={mainMovie.id}/>
        </div>
    </div>
  )
}

export default MainBrowseContainer