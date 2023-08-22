import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Outlet, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Error_404 from "../Errors/Error_404/Error_404";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { UserContext } from "../../contexts/CurrentUserContext"; // Контекст
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(null); // 3 разделения - null, false, true

  useEffect(() => {
    login();
  }, [loggedIn])

// Выход
const login = () => {
    if (
    window.location.pathname === "/movies" ||
    window.location.pathname === "/savemovies" ||
    window.location.pathname === "/profile"
    ) {setLoggedIn(true)}
  }


  const navigateMenu = () => {
    window.location.pathname === "/register"
    ?
    navigate("/sign-in")
    :
    navigate("/register")
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<> <Header loggedIn={loggedIn} navigateMenu={navigateMenu}/> <Outlet /> </>} >
          <Route path="/" element={<> <Main /> <Footer /> </>} />
          <Route path="/movies" element={<> <Movies /> <Footer /> </>} />
          <Route path="/savemovies" element={<> <SavedMovies /> <Footer /> </>} />
          <Route path="/profile" element={<Profile />} />
        </Route> {/*header*/}
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<Error_404 />} />
      </Routes> {/*Routes*/}
    </div> // App
  );
}

export default App;
