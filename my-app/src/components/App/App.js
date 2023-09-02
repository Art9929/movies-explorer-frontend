import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Outlet, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/CurrentUserContext"; // Контекст

// pages-components
// Header
import Header from "../Header/Header";
// Main Page
import Main from "../Main/Main";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
// Movies/SavedMovies Pages
import Movies from "../Movies/Movies";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardFilter from "../MoviesCardFilter";
import MoviesMoreButton from "../MoviesMoreButton/MoviesMoreButton";
import SavedMovies from "../SavedMovies/SavedMovies";
import SaveMoviesMoreButton from "../SaveMoviesMoreButton/SaveMoviesMoreButton";
import ProtectedRoute from "../ProtectedRoute";
// ther Pages
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error_404 from "../Errors/Error_404/Error_404";
import Footer from "../Footer/Footer";
// utills
import * as auth from "../utils/auth";
import api from "../utils/MoviesApi.js";
// hooks
import { useForm, useFormWithValidation } from "../hooks/Validation";
import RenderCountCard from "../RenderCountCard";

function App() {
  // functions
  const { values, handleChange, setValues, errors, isValid, setIsValid, resetForm} = useFormWithValidation();
  const { roundedVisibleCardCount, handleClick } = RenderCountCard();
  // useState
  const [loggedIn, setLoggedIn] = useState(null); // 3 разделения - null, false, true
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [cards, setCards] = useState([]); // Фильмы со стороннего сервера
  const [saveCards, setSaveCards] = useState([]); // Фильмы с Моего сервера
  const [ShortFilmsClick, setShortFilmsClick] = useState(null); // Короткометражки
  const [moviesMoreBtn, setMoviesMoreBtn] = useState(null); // Короткометражки
  const [disLikeBtnCard, setdisLikeBtnCard] = useState(""); // Кнопка Лайка Карточки
  const [errorProfile, seterrorProfile] = useState(""); // Ошибка обновления профиля

  function handleLikeBtnCard() {
    return "movies-card-delete__button";
  }

  function handleProfileErrorNone() {
    return "profile__display-block";
  }

const token = localStorage.jwt;

// // Проверка токена
  useEffect(() => {
    auth
      .checkToken()
      .then((res) => { setLoggedIn(true); })
      .catch((err) => {setLoggedIn(false); console.error(err) });
  }, [])

  // Загрузка страницы
  useEffect(() => {
    if (loggedIn) {
      api
        .profile()  // Профиль
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => console.error(err));

        api
          .getInitialSaveCards()  // Сохраненные фильмы
          .then((data) => {
            setSaveCards(data);
            setdisLikeBtnCard(handleLikeBtnCard)
            // console.log(saveCards);
          })
          .catch((err) => console.error(err));
    }
  }, [loggedIn]);


  // Загрузка короткометражек
  const shortFilmsAction = () => {
    ShortFilmsClick ? setShortFilmsClick(false) : setShortFilmsClick(true)
  }

  // Регистрация
  const handleSubmitRegistrate = (e) => {
    e.preventDefault();
    console.log(values.name);
    auth
      .signup(values.name, values.email, values.password)
      .then((res) => {
        navigate("/signin", { replace: true });
      })
      .catch((e) => console.log(e));
  };

  // Авторизация
  const handleSubmitAuth = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    auth
      .authorize(values.email, values.password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          setValues({ email: "", password: "" });
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

// Редактирование профиля
const handleUpdateUser = (e) => {
  e.preventDefault();
  api.editProfile(values)
  .then((info) => {
    setCurrentUser(info);
    resetForm()
    seterrorProfile("");
  })
  .catch((err) => { seterrorProfile(handleProfileErrorNone); setIsValid(false); console.error(err) });
}


// Поиск фильма
const handleSubmitSerach = (e) => {
    e.preventDefault();
    if (!values.movies) {
      return;
    }
      api
        .getInitialCards()
        .then((data) => {
          if (data) {
          const search = values.movies.toLowerCase().trim();

          const searchTrue = data.map(card => {
            <div key={'card.id'}></div>
            return (
            ( card.nameRU.toLowerCase().trim().indexOf(search) > -1 )
            ||
            ( card.nameEN.toLowerCase().trim().indexOf(search) > -1 ) )
            ?
            card
            :
            false;
        });
        setCards(searchTrue)
        // console.log(searchTrue);
        // & setMoviesMoreBtn(true)
        }
      })
    .catch((err) => console.error(err));
  };

 // Лайк и сохранение карточки
 function handleAddCardSubmit(card) {
  card.image = "https://api.nomoreparties.co/"+card.image.url;
  card.thumbnail = "https://api.nomoreparties.co/"+card.image.url;
  card.movieId = card.id;
  delete card.updated_at;
  delete card.created_at;
  delete card.id;

  api.addNewCard(card)
  .then((saveCard) => {
  })
  .catch((err) => console.error(err));
}

 // Удаление карточки
 function handleDeleteCardSubmit(card) {
  api.deleteCard(card._id)
  .then((data) => {
    console.log(data);
    setSaveCards((results) => results.filter((c) => c._id !== card._id ? data : data - c));
  })
  .catch((err) => console.error(err));
}


  // Выход
const logOut = () => {
  // Удаление Куки, localStorage при выходе
    auth.logOut()
    .then(() => {
      localStorage.clear();
      setLoggedIn(false);
      navigate("/signin", {replace: true})
    })
    .catch((err) => console.error(err));
  }

  return (
    <div className="App">
      {loggedIn}
      <Routes>
        <Route
          element={
            <>
              <Header loggedIn={loggedIn} /> <Outlet />
            </>
          }
        >
          <Route
            path="/"
            element={
              <Main
                promo={ <Promo /> }
                navTab={ <NavTab /> }
                aboutProject={ <AboutProject />}
                techs={ <Techs /> }
                aboutMe={ <AboutMe/> }
                portfolio={ <Portfolio/> }
                footer={ <Footer/> }
              />
            }
          />

          <Route
            path="/movies"
            element={
              <>
                <ProtectedRoute
                  token={token}
                  element={
                    <UserContext.Provider value={currentUser}>
                      <Movies
                        searchForm={
                          <SearchForm
                            handleSubmit={(e) => handleSubmitSerach(e)}
                            handleChange={handleChange}
                            values={values}
                            shortFilmsAction={shortFilmsAction}
                            />}

                        moviesCardList={
                          <MoviesCardList
                            moviesCardFilter={cards
                              ?.slice(0, roundedVisibleCardCount)
                              .map((card) => (
                                <MoviesCardFilter
                                    key={card.id}
                                    card={card}
                                    ShortFilmsClick={ShortFilmsClick}
                                    moviesCard={
                                    <MoviesCard
                                      card={card}
                                      moviesLikeCardButton={() => handleAddCardSubmit(card)}
                                    />}
                                />
                              ))}
                          />
                        }
                        moviesMoreButton={
                          <MoviesMoreButton moviesMoreBtn={setMoviesMoreBtn} handleClick={handleClick} />
                        }
                        footer={<Footer />}
                      />
                    </UserContext.Provider>
                  }
                />
              </>
            }
          />
          <Route
            path="/savemovies"
            element={
              <>
                <ProtectedRoute
                  token={token}
                  element={
                    <UserContext.Provider value={currentUser}>
                      <SavedMovies
                      searchForm={
                        <SearchForm
                        handleSubmit={(e) => handleSubmitSerach(e)}
                        handleChange={handleChange}
                        values={values}
                        shortFilmsAction={shortFilmsAction}
                        /> }
                        moviesCardList={
                          <MoviesCardList
                            moviesCardFilter={saveCards
                              .map((card) => (
                                <MoviesCardFilter
                                    key={card.id}
                                    card={card}
                                    ShortFilmsClick={ShortFilmsClick}
                                    moviesCard={
                                    <MoviesCard
                                      card={card}
                                      moviesLikeCardButton={() => handleDeleteCardSubmit(card)}
                                      disLikeBtnCard={disLikeBtnCard}
                                    />}
                                />
                              ))}
                          />
                        }
                      footer={<Footer />}
                      />
                    </UserContext.Provider>
                  }
                />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <ProtectedRoute
                  token={token}
                  element={
                    <UserContext.Provider value={currentUser}>
                      <Profile
                        handleSubmit={(e) => handleUpdateUser(e)}
                        handleChange={(e) => handleChange(e)}
                        values={values}
                        errors={errors}
                        isValidForm={isValid}
                        logOut={logOut}
                        currentUser={currentUser}
                        errorProfile={errorProfile}
                      />
                    </UserContext.Provider>
                  }
                />
              </>
            }
          />
        </Route>{/*header*/}

        <Route
          path="/signup"
          element={
            <Register
              handleSubmit={(e) => handleSubmitRegistrate(e)}
              handleChange={(e) => handleChange(e)}
              values={values}
              errors={errors}
              isValidForm={isValid}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              handleSubmit={(e) => handleSubmitAuth(e)}
              handleChange={(e) => handleChange(e)}
              values={values}
              errors={errors}
              isValidForm={isValid}
            />
          }
        />
        <Route path="*" element={<Error_404 />} />
      </Routes>
      {/*Routes*/}
    </div> // App
  );
}

export default App;
