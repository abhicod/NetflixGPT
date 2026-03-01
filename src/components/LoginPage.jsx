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
        <div className="w-full h-screen absolute top-0 left-0 bg-black/70 flex justify-center items-center">
          <div className=" bg-black/70 h-1-/12 w-2/8 p-10 rounded-xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              action=""
              className="h-full w-full"
            >
              <h1 className="text-white text-2xl font-bold">
                {isSignIn ? "Log In" : "Sign Up"}
              </h1>
              <div className="flex flex-col gap-4 py-5">
                {!isSignIn && (
                  <input
                    type="text"
                    ref={fullName}
                    placeholder="Enter Your Full Name"
                    className="bg-gray-700/70 rounded-lg p-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-white focus:text-white placeholder:text-sm text-md"
                  />
                )}
                <input
                  type="text"
                  ref={email}
                  placeholder="Enter Your Email or phone number"
                  className="bg-gray-700/70 rounded-lg p-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-white focus:text-white placeholder:text-sm text-md"
                />
                <input
                  type="password"
                  ref={password}
                  placeholder="Enter Your Password"
                  className="bg-gray-700/70 rounded-lg p-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-white focus:text-white placeholder:text-sm text-md"
                />
                {error && <p className="text-red-500 text-[15px]">{error}</p>}
              </div>

              <button
                type="button"
                className="bg-red-600 text-white font-lg text-xl py-2 px-5 w-full  rounded-lg flex items-center justify-center gap-1 hover:bg-red-700 transition-all duration-300 cursor-pointer"
                onClick={handleValidate}
              >
                {isSignIn ? "Log In" : "Sign Up"}
              </button>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-1 py-2">
                  <input type="checkbox" />
                  <label className="text-white">Remember me</label>
                </div>
                <p className="text-white">Need help?</p>
              </div>
              <div className="text-sm flex gap-2 py-2">
                <span className="text-gray-500">
                  {isSignIn
                    ? "New to Netflix?"
                    : "You already have an account."}
                </span>
                <button
                  type="button"
                  className="text-white font-semibold hover:text-red-600 transition-all duration-100 cursor-pointer"
                  onClick={handleSignIn}
                >
                  {isSignIn ? "Sign up now" : "Log In"}
                </button>
              </div>
              <div className="pt-2">
                <span className="text-sm text-gray-500">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                <span className="text-blue-500 text-sm ml-2 hover:text-blue-600 transition-all duration-200 cursor-pointer">
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
