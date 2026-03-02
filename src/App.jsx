
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import LoginPage from "./components/LoginPage";
import BrowsePage from "./components/BrowsePage";
import AppLayout from "./components/AppLayout";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Error from "./components/Error";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // Only redirect to browse if on login page or root
        if (location.pathname === "/login" || location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        // Only redirect to login if trying to access protected routes
        if (location.pathname === "/browse") {
          navigate("/login");
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Body />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="browse" element={<BrowsePage />} />
            <Route path="error" element={<Error />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;