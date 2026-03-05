import { BODY_BG_IMG } from "../utils/constants";
import { useRef, useState } from "react";
import { validateLoginData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import photo from "../assets/photo.jpeg";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef();
  const password = useRef();
  const fullName = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignIn = () => {
    setError("");
    setIsSignIn(!isSignIn);
  };
  const handleValidate = () => {
    setError("");
    let validationError = null;
    try {
      if (isSignIn) {
        const message = validateLoginData(
          email.current.value,
          password.current.value,
        );
      } else {
        const message = validateLoginData(
          email.current.value,
          password.current.value,
          fullName.current?.value || "",
        );
      }
    } catch (error) {
      validationError = error.message;
      setError(validationError);
    }
    if (validationError) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: photo ,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError("Email already exists , Use a different email");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError("User Not Found - Please Sign Up");
        });
    }
  };

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-screen object-cover"
          src={BODY_BG_IMG}
          alt="body background"
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-black/70 flex justify-center items-center p-4 sm:p-6 md:p-8">
          <div className="bg-black/70 w-full max-w-md sm:max-w-lg md:max-w-xl p-6 sm:p-8 md:p-10 rounded-xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              action=""
              className="h-full w-full"
            >
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                {isSignIn ? "Log In" : "Sign Up"}
              </h1>
              <div className="flex flex-col gap-4 py-5">
                {!isSignIn && (
                  <input
                    type="text"
                    ref={fullName}
                    placeholder="Enter Your Full Name"
                    className="w-full bg-gray-700/70 rounded-lg p-3 sm:p-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:text-white placeholder:text-sm sm:text-base transition-all duration-200"
                  />
                )}
                <input
                  type="text"
                  ref={email}
                  placeholder="Enter Your Email or phone number"
                  className="w-full bg-gray-700/70 rounded-lg p-3 sm:p-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:text-white placeholder:text-sm sm:text-base transition-all duration-200"
                />
                <input
                  type="password"
                  ref={password}
                  placeholder="Enter Your Password"
                  className="w-full bg-gray-700/70 rounded-lg p-3 sm:p-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:text-white placeholder:text-sm sm:text-base transition-all duration-200"
                />
                {error && <p className="text-red-500 text-sm sm:text-base">{error}</p>}
              </div>

              <button
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                onClick={handleValidate}
              >
                {isSignIn ? "Log In" : "Sign Up"}
              </button>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 py-3 sm:py-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <label className="text-white text-sm sm:text-base">Remember me</label>
                </div>
                <p className="text-white text-sm sm:text-base hover:underline cursor-pointer">Need help?</p>
              </div>
              <div className="text-sm sm:text-base flex flex-col sm:flex-row gap-1 sm:gap-2 py-3">
                <span className="text-gray-500">
                  {isSignIn
                    ? "New to Netflix?"
                    : "You already have an account."}
                </span>
                <button
                  type="button"
                  className="text-white font-semibold hover:text-red-600 transition-all duration-200 cursor-pointer"
                  onClick={handleSignIn}
                >
                  {isSignIn ? "Sign up now" : "Log In"}
                </button>
              </div>
              <div className="pt-4 text-center">
                <span className="text-xs sm:text-sm text-gray-500">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                <span className="text-blue-500 text-xs sm:text-sm ml-2 hover:text-blue-600 transition-all duration-200 cursor-pointer">
                  Learn more.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
