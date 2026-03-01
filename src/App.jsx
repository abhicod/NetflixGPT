import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import LoginPage from "./components/LoginPage";
import BrowsePage from "./components/BrowsePage";
import AppLayout from "./components/AppLayout";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import Error from "./components/Error";


const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
         navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="browse" element={<BrowsePage />} />
        <Route path="error" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
