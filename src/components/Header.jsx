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
  const GPTSearchView = useSelector(store => store.gpt.showGptSearch);
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

  const handleGPTSearch = () =>{

    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };



  return (
    <div className={user ? "px-25 pt-5 pb-2 absolute w-full z-50 bg-linear-to-b from-black to-transparent shadow-2xl" :" px-35 py-5 absolute w-full z-50 bg-black/40 shadow-2xl bg-linear-to-b from-black to-transparent"}>
      <div className="flex justify-between items-center  ">
        <Link to={user ? "/browse" : "/"}>
          <img
            className="w-40 hover:scale-102 transition-all duration-100 cursor-pointer"
            src={HEADER_LOGO}
            alt="netflix logo"
          />
        </Link>
        <div>
          <div className="flex items-center gap-4">

            <div className="">
              <select name="language-selector" onChange={handleLanguageChange} className="bg-gray-900/80 px-5 py-2 rounded-lg text-white">
                {
                  SUPPORTED_LANGUAGES.map((lang) => {
                    return <option className="bg-gray-900/80 rounded-lg" key={lang.key} value={lang.key}>{lang.name}</option>
                  })
                }
              </select>
            </div>

            {user && (<>
              <button type="button" onClick={handleGPTSearch} className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 transition-all duration-100 cursor-pointer">
               {
                GPTSearchView ? "Browse Page" : "GPT Search" 
               }
                
              </button>
              <img
                className="w-10 rounded-md"
                src="https://imgs.search.brave.com/s02Bp29n65ENKZyRqzh107KYZZZaj-w1v3aYx8Ki0pQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkxLzg2/LzFiLzkxODYxYjc0/OTg0MTIyMWQ1MjEy/MmYwYzI5MzNkOGE2/LmpwZw"
                alt="user icon"
              />
              </>
            )}
            <Link to="/login">
              <button
                onClick={handleSignOut}
                className="bg-red-600 font-semibold text-white px-4 py-1 rounded-md hover:bg-red-700 transition-all duration-100 cursor-pointer"
              >
                {user ? "Log Out" : "Log In"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


