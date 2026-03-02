import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";

const BrowsePage = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <div className="w-full">
      <MainBrowseContainer />
      <SecondaryBrowseContainer />
      </div>
    </div>
  )
}

export default BrowsePage