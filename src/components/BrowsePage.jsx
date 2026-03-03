import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const BrowsePage = () => {
  const GPTSearchView = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <div className="w-full">
        {GPTSearchView ? (
          <GPTSearchPage />
        ) : (
          <>
            <MainBrowseContainer />
            <SecondaryBrowseContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;
