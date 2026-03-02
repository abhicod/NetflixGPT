import { HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
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
            {user && (
              <img
                className="w-10 rounded-md"
                src="https://imgs.search.brave.com/s02Bp29n65ENKZyRqzh107KYZZZaj-w1v3aYx8Ki0pQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkxLzg2/LzFiLzkxODYxYjc0/OTg0MTIyMWQ1MjEy/MmYwYzI5MzNkOGE2/LmpwZw"
                alt="user icon"
              />
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
