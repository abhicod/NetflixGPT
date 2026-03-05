// 
import { HEADER_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/appConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const GPTSearchView = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={`absolute w-full z-50 bg-linear-to-b from-black to-transparent shadow-2xl transition-all duration-300 ${
        user
          ? "px-4 sm:px-6 md:px-8 lg:px-12 pt-3 sm:pt-4 md:pt-5 pb-1 sm:pb-2 md:pb-3"
          : "px-4 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Logo */}
        <Link
          to={user ? "/browse" : "/"}
          className="shrink-0 w-20 sm:w-24 md:w-32 lg:w-40 hover:scale-105 transition-transform duration-200"
        >
          <img
            className="w-full"
            src={HEADER_LOGO}
            alt="netflix logo"
            title={user ? "Go to Browse" : "Go to Home"}
          />
        </Link>

        {/* Right Section - Controls */}
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
          {/* Language Selector */}
          <div className="w-full sm:w-auto min-w-[120px]">
            <select
              name="language-selector"
              onChange={handleLanguageChange}
              className="w-full bg-gray-900/80 hover:bg-gray-800/90 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm md:text-base text-white border border-gray-700/50 hover:border-gray-600 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.key}
                  value={lang.key}
                  className="bg-gray-900 text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Conditional User Controls */}
          {user && (
            <>
              {/* GPT Search Button */}
              <button
                type="button"
                onClick={handleGPTSearch}
                className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-medium px-3 sm:px-4 md:px-5 py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-purple-500/50"
              >
                {GPTSearchView ? "Browse" : "GPT Search"}
              </button>

              {/* User Avatar */}
              <div className="hidden sm:block">
                <img
                  className="w-9 sm:w-10 md:w-11 rounded-md border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-200 cursor-pointer"
                  src="https://imgs.search.brave.com/s02Bp29n65ENKZyRqzh107KYZZZaj-w1v3aYx8Ki0pQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkxLzg2/LzFiLzkxODYxYjc0/OTg0MTIyMWQ1MjEy/MmYwYzI5MzNkOGE2/LmpwZw"
                  alt="user avatar"
                />
              </div>
            </>
          )}

          {/* Sign Out / Log In Button */}
          <Link to="/login" className="w-full sm:w-auto">
            <button
              onClick={handleSignOut}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold px-3 sm:px-4 md:px-5 py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-red-500/50"
            >
              {user ? "Log Out" : "Log In"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;