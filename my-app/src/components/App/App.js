import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Outlet, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/CurrentUserContext"; // Контекст

// pages-components
import Header from "../Header/Header";

import Main from "../Main/Main";
import AboutMe from "../Main/AboutMe/AboutMe";
import AboutProject from "../Main/AboutProject/AboutProject";
import NavTab from "../Main/NavTab/NavTab";
import Portfolio from "../Main/Portfolio/Portfolio";
import Promo from "../Main/Promo/Promo";
import Techs from "../Main/Techs/Techs";

import Movies from "../Movies/Movies";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesMoreButton from "../Movies/MoviesMoreButton/MoviesMoreButton";

import SavedMovies from "../SavedMovies/SavedMovies";
import SaveMoviesMoreButton from "../SavedMovies/SaveMoviesMoreButton/SaveMoviesMoreButton";

import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error_404 from "../Errors/Error_404/Error_404";
import Footer from "../Footer/Footer";

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(null); // 3 разделения - null, false, true

const moviesCardButton = "movies-card__button";
const moviesCardActiveButton = "movies-card-active__button";
const moviesCardDeleteButton = "movies-card-delete__button";

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

  return (
    <div className="App">
      <Routes>
        <Route element={<> <Header loggedIn={loggedIn} /> <Outlet /> </>} >
          <Route path="/" element={
          <>
            <Main />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
          </>
          } />
          <Route path="/movies" element={
            <>
            <Movies />
            <SearchForm />
            <MoviesCardList
              moviesCardButton={moviesCardButton}
              moviesCardActiveButton={moviesCardActiveButton}
              moviesCardDeleteButton={""}
            />
            <MoviesMoreButton />
            <Footer />
            </>
          } />
          <Route path="/savemovies" element={
          <>
            <SavedMovies />
            <SearchForm />
            <MoviesCardList
              moviesCardButton={""}
              moviesCardActiveButton={moviesCardActiveButton}
              moviesCardDeleteButton={moviesCardDeleteButton}
            />
            <SaveMoviesMoreButton />
            <Footer />
          </>
          }/>
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
