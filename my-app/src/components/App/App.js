import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
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
import ProtectedRoute from "../ProtectedRoute";
// ther Pages
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../Errors/Error_404/Error_404";
import Footer from "../Footer/Footer";
// utills
import * as auth from "../utils/auth";
import api from "../utils/MoviesApi.js";
// hooks
import { useFormWithValidation } from "../hooks/Validation";
import RenderCountCard from "../RenderCountCard";

function App() {
  // functions
  const { values, handleChange, setValues, errors, isValid, setIsValid, resetForm} = useFormWithValidation();
  const { roundedVisibleCardCount, handleClick, visibleCardCount } = RenderCountCard();
  // useState
  const [loggedIn, setLoggedIn] = useState(null); // 3 разделения - null, false, true
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [cards, setCards] = useState([]); // Фильмы со стороннего сервера
  const [search, setSearch] = useState(""); // Сохраняем фильмы для возврата значения setCards после фильтрации
  const [saveSearch, setSaveSearch] = useState(""); // Сохраняем фильмы для возврата значения setCards после фильтрации
  const [saveCards, setSaveCards] = useState([]); // Фильмы с Моего сервера
  const [saveCardsNoFileter, setSaveCardsNoFileter] = useState([]); // Неотфильтрованные фильмы с Моего сервера
  const [shortFilmsClick, setShortFilmsClick] = useState(null); // class checked для "Короткометражки для фильмов"
  const [shortSaveFilmsClick, setShortSaveFilmsClick] = useState(null); // class checked для "Короткометражки для сохраненных фильмов"
  const [moviesMoreBtn, setMoviesMoreBtn] = useState(null); // Короткометражки
  const [errorProfile, seterrorProfile] = useState(""); // Ошибка обновления профиля
  const [countCards, setCountCards] = useState(0); // Подсчёт карточек с фильмами
  const [isLoading, setIsLoading] = useState(null); //Прелоадер
  const [serverError, setserverError] = useState(null); // Ошибка соединения
  const [isAppMounted , setIsAppMounted ] = useState(null); // Ошибка соединения

  const handleDisLikeBtnCard = "movies-card-delete__button";

  function handleProfileErrorNone() {
    return "profile__display-block";
  }

const tokenFilms = JSON.parse(window.localStorage.getItem('films'))
const tokenSaveFilms = JSON.parse(window.localStorage.getItem('saveFilms'))

// Проверка токенов
  useEffect((token) => {
    // Токен регистрации
    auth
    .checkToken(token)
    .then((res) => {setLoggedIn(true); setIsAppMounted (true)})
    .catch((err) => {setLoggedIn(false); console.error(err); setIsAppMounted (true)});
    // Токен загрузки фильмов в НЕпустом инпуте
    if (tokenFilms?.btn === true) {
      setCards(tokenFilms.shortFilmsCards); // закладываем отфильтрованный список при условии наличия токена и вкл фильтра
      setShortFilmsClick(tokenFilms?.btn); // включаем фильтр явно
      setSearch(tokenFilms?.search); // включаем фильтр явно
    } else if (tokenFilms) {
      setCards(tokenFilms.cardsNoFilter); // закладываем отфильтрованный список при условии наличия токена и вкл фильтра
      setSearch(tokenFilms.search); // закладываем отфильтрованный список при условии наличия токена и вкл фильтра
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Загрузка страницы

  useEffect(() => {
    if (loggedIn) {
      auth
        .profile()  // Профиль
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => console.error(err));

        api
          .getInitialSaveCards()  // Сохраненные фильмы
          .then((data) => {
            setSaveCardsNoFileter(Array.from(data))
            // Токен загрузки сохраненных фильмов в НЕпустом инпуте
            if (tokenSaveFilms?.btn === true) {
              setSaveCards(tokenSaveFilms.shortFilmsCards); // закладываем отфильтрованный список при условии наличия токена и вкл фильтра
              setShortSaveFilmsClick(tokenSaveFilms.btn); // включаем фильтр явно
              setSaveSearch(tokenSaveFilms?.search); // включаем фильтр явно
            } else if (tokenSaveFilms && tokenSaveFilms.search === "") {
              setShortSaveFilmsClick(tokenSaveFilms.btn); // включаем фильтр явно
              setSaveCards(data); // закладываем отфильтрованный список при условии наличия токена и вкл фильтра
            } else if (tokenSaveFilms && tokenSaveFilms?.search !== "") {
              console.log(3);
              setSaveCards(tokenSaveFilms.cardsFilter); // закладываем отфильтрованный список при условии наличия токена и вкл фильтра
              setSaveSearch(tokenSaveFilms.search); // закладываем отфильтрованный список при условии наличия токена и вкл фильтра
            } else {
              console.log(4);
            setSaveCards(Array.from(data));
            const localStorageArray = {'search' : "", 'cardsNoFilter' : Array.from(data), 'cardsFilter' : {}, 'shortFilmsCards': {}, 'btn' : null};
            window.localStorage.setItem('saveFilms', JSON.stringify(localStorageArray) );
          }
          })
          .catch((err) => console.error(err));

        }
// eslint-disable-next-line react-hooks/exhaustive-deps
      }, [loggedIn]);


      // Кнопка "Еще"
  useEffect(() => {
    if (countCards) {
      countCards < 12 ? setMoviesMoreBtn(false) : setMoviesMoreBtn(true)
    }}, [countCards]);

  useEffect(() => {
    countCards < visibleCardCount && setMoviesMoreBtn(false);
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visibleCardCount]);


  // Регистрация
  const handleSubmitRegistrate = (e) => {
    e.preventDefault();
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
  auth
  .editProfile(values)
    .then((info) => {
      setCurrentUser(info);
      resetForm()
      seterrorProfile("");
  })
  .catch((err) => { seterrorProfile(handleProfileErrorNone); setIsValid(false); console.error(err) });
}

// Поиск фильма
const handleSubmitSerach = (search) => {
  if (search === "") setCards(null);
    if (search) {
      setSearch(search)
      const searchCards = search.toLowerCase().trim();
      setIsLoading(true); // прелоадер
      api
      .getInitialCards()
      .then((cards) => {
        const data = cards.filter(card =>
          card.nameRU.toLowerCase().trim().indexOf(searchCards) > -1 ||
          card.nameEN.toLowerCase().trim().indexOf(searchCards) > -1)
          setCards(data)
          setCountCards(data.length);

          const localStorageArray = {'search' : search, 'cardsNoFilter' : data, 'shortFilmsCards': {}, 'btn' : null};
          window.localStorage.setItem('films', JSON.stringify(localStorageArray) )
        })
      .catch((err) => err && ( console.error(err), setserverError(true), setMoviesMoreBtn(false) ) )
      .finally(() => setIsLoading(false));
}}

// Поиск Сохраненного фильма
const handleSubmitSaveSerach = (saveSearch) => {
  if (saveSearch === "") setSaveCards(saveCardsNoFileter);
    if (saveSearch) {
      setSaveSearch(saveSearch)
      const searchSaveCards = saveSearch.toLowerCase().trim();
      setIsLoading(true); // прелоадер
      try {
        const data = saveCardsNoFileter.filter(card =>
          card.nameRU.toLowerCase().trim().indexOf(searchSaveCards) > -1 ||
          card.nameEN.toLowerCase().trim().indexOf(searchSaveCards) > -1)
          setSaveCards(data)
          const localStorageArray = {'search' : saveSearch, 'cardsNoFilter' : saveCardsNoFileter, 'cardsFilter' : data, 'shortFilmsCards': {}, 'btn' : null};
          window.localStorage.setItem('saveFilms', JSON.stringify(localStorageArray) );
        }
        catch (err) { console.error(err); setserverError(true); }
        finally { setIsLoading(false); };
}}

  // Короткометражки в Фильмах
  const shortFilmsAction = () => {
    if (shortFilmsClick) {
      if (cards && tokenFilms){
        setCards(tokenFilms.cardsNoFilter) // возвращаем исходное значение карточек через cardsFilter
        setCountCards(cards.length);
        setSearch(tokenFilms.search)
        setShortFilmsClick(false)
        const localStorageArray = {'search' : search, 'cardsNoFilter' : tokenFilms.cardsNoFilter, 'shortFilmsCards': {}, 'btn' : false};
        window.localStorage.setItem('films', JSON.stringify(localStorageArray) )
      }
    } else if (cards && tokenFilms) {
      const cardsNoFilter = cards;
      const  data = cards.filter(card => card.duration < 40)
      setCards(data)
      setCountCards(data.length); // Для кнопки "Ещё"
      setSearch(tokenFilms.search)
      setShortFilmsClick(true)
      // записываем рзультат в jwt токен
      const localStorageArray = {'search' : search, 'cardsNoFilter' : cardsNoFilter, 'shortFilmsCards': data, 'btn' : true};
      window.localStorage.setItem('films', JSON.stringify(localStorageArray) )
    }
  }

  // Короткометражки в Сохраненных Фильмах
  const shortSaveFilmsAction = () => {
    if (saveCards && !shortSaveFilmsClick) {
        const data = saveCards.filter(card => card.duration < 40)
        setSaveCards(data)
        setShortSaveFilmsClick(true)
        const localStorageArray = {'search' : saveSearch, 'cardsNoFilter' : saveCardsNoFileter, 'cardsFilter' : data, 'shortFilmsCards': data, 'btn' : true};
        window.localStorage.setItem('saveFilms', JSON.stringify(localStorageArray) );
      } else if (saveCards && shortSaveFilmsClick) {
        setSaveCards(saveCardsNoFileter)
        setShortSaveFilmsClick(false)
        const localStorageArray = {'search' : saveSearch, 'cardsNoFilter' : saveCardsNoFileter, 'cardsFilter' : saveCardsNoFileter, 'shortFilmsCards': {}, 'btn' : false};
        window.localStorage.setItem('saveFilms', JSON.stringify(localStorageArray) );
      }

}


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
  .catch((err) => err && ( console.error(err), setserverError(true), setMoviesMoreBtn(false) ) );
}

 // Удаление карточки
 function handleDeleteCardSubmit(card) {
  api.deleteCard(card._id)
  .then((data) => {
    setSaveCards((results) => results.filter((c) => c._id !== card._id ? data : data - c));
    setSaveCardsNoFileter((results) => results.filter((c) => c._id !== card._id ? data : data - c));
    const localStorageArray = {'search' : saveSearch, 'cardsNoFilter' : saveCardsNoFileter, 'cardsFilter' : saveCardsNoFileter, 'shortFilmsCards': {}, 'btn' : tokenSaveFilms.btn};
    window.localStorage.setItem('saveFilms', JSON.stringify(localStorageArray) );
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
      <Routes>
        <Route
          element={
            <>
              <Header isAppMounted={isAppMounted} loggedIn={loggedIn} /> <Outlet />
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
            <>
              <Route
                path="/movies"
                element={
                  <>
                    <ProtectedRoute
                      isAppMounted={isAppMounted}
                      loggedIn={loggedIn}
                      element={
                        <UserContext.Provider value={currentUser}>
                          <Movies
                            searchForm={
                              <SearchForm
                              handleSubmitSerach={(search) => handleSubmitSerach(search)}
                              shortFilmsAction={shortFilmsAction}
                              token={tokenFilms}
                              shortFilmsClick={shortFilmsClick}
                              />}
                              moviesCardList={
                              <MoviesCardList
                                serverError={serverError}
                                isLoading={isLoading}
                                moviesCardFilter={cards
                                  ?.slice(0, roundedVisibleCardCount)
                                  .map((card) => (
                                    <MoviesCardFilter
                                          key={card.id}
                                          card={card}
                                          values={values.movies}
                                          moviesCard={
                                          <MoviesCard
                                            card={card}
                                            moviesActionCardButton={() => handleAddCardSubmit(card)}
                                          />}
                                      />
                                    ))}
                                />
                              }
                            moviesMoreButton={
                              <MoviesMoreButton moviesMoreBtn={moviesMoreBtn} handleClick={handleClick} values={values.movies}/>
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
                      isAppMounted={isAppMounted}
                      loggedIn={loggedIn}
                      element={
                        <UserContext.Provider value={currentUser}>
                          <SavedMovies
                          searchForm={
                            <SearchForm
                            handleSubmitSerach={(saveSearch) => handleSubmitSaveSerach(saveSearch)}
                            shortFilmsAction={shortSaveFilmsAction}
                            token={tokenSaveFilms}
                            shortFilmsClick={shortSaveFilmsClick}
                            /> }
                            moviesCardList={
                              <MoviesCardList
                                moviesCardFilter={Array.from(saveCards)
                                  ?.slice(0, roundedVisibleCardCount)
                                  .map((card) => (
                                    <MoviesCardFilter
                                        key={card.nameRU}
                                        card={card}
                                        moviesCard={
                                        <MoviesCard
                                          card={card}
                                          moviesActionCardButton={() => handleDeleteCardSubmit(card)}
                                          disLikeBtnCard={handleDisLikeBtnCard}
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
                      isAppMounted={isAppMounted}
                      loggedIn={loggedIn}
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
            </>
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/*Routes*/}
    </div> // App
  );
}

export default App;
