import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainBrowseContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // console.log(movies);

    if(!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);

  return (
    <div>
        <div className='h-screen relative'>
            <VideoTitle movie={mainMovie}/>
            <VideoBackground movieId={mainMovie.id}/>
        </div>
    </div>
  )
}

export default MainBrowseContainer