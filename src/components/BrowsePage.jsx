import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";
import usePopularMovies from "../customHooks/usePopularMovies";

const BrowsePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <div className="w-full">
      <MainBrowseContainer />
      <SecondaryBrowseContainer />
      </div>
    </div>
  )
}

export default BrowsePage;