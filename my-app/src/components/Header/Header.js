import "./Header.css";
import { useState, useEffect} from "react";

function Header({loggedIn}) {

  const [setPopupMenuActive, setPopupMenu] = useState("");
  const [setPopupMenuNavigateActive, setPopupMenuNavigate] = useState("");
  const [setPopupMenuExiteActive, setPopupMenuExit] = useState("");
  const [setMainLinkHighlightActive, setMainLinkHighlight] = useState("");
  const [setMoviesLinkHighlightActive, setMoviesLinkHighlight] = useState("");
  const [setSaveMoviesLinkHighlightActive, setSaveMoviesLinkHighlight] = useState("");

  function openPopupMenu() {
    setPopupMenu(setPopupMenuActive => !setPopupMenuActive);
    setPopupMenuNavigate(setPopupMenuNavigateActive => !setPopupMenuNavigateActive);
    setPopupMenuExit(setPopupMenuExiteActive => !setPopupMenuExiteActive);
  }

  const toggleMenuPopup = setPopupMenuActive ? 'header__menu_active' : '';
  const toggleMenuNavigatePopup = setPopupMenuNavigateActive ? 'header__nav_active' : '';
  const toggleMenuBurgerPopup = setPopupMenuExiteActive ? 'header__burger-exit' : '';


function navigateMenu() {
  switch (window.location.pathname) {
    case "/":
      setMainLinkHighlight("header__link_highlight");
      break;
    case "/movies":
      setMoviesLinkHighlight("header__link_highlight");
      break;
    case "/savemovies":
      setSaveMoviesLinkHighlight("header__link_highlight");
      break;
    default:
    }
}

  useEffect(() => {
    navigateMenu();
  }, [])

  return (
    <header className={`header ${loggedIn ? "header_theme_white" : "header_theme_gray"}`}>
        <div className={`header__menu ${toggleMenuPopup}`}>
          <div className="header__wrapper-logo">
            <a href="/" className="header__logo hover__button"></a>
          </div>
      {loggedIn ? (
        <div className="header__wrapper">
          <button
            type="button"
            aria-label="Бургер меню"
            className={`header__burger ${toggleMenuBurgerPopup}`}
            onClick={openPopupMenu}>
         </button>
          <nav className={`header__nav ${toggleMenuNavigatePopup}`}>
              <ul className="header__list">
              <li className="header__text header__text_active">
                  <a className={`header__link hover__link ${setMainLinkHighlightActive}`} href="/">{"Главная"}</a>
                </li>
                <li className="header__text">
                  <a className={`header__link hover__link ${setMoviesLinkHighlightActive}`} href="/movies">{"Фильмы"}</a>
                </li>
                <li className="header__text">
                  <a className={`header__link hover__link ${setSaveMoviesLinkHighlightActive}`} href="/savemovies">{"Сохранённые фильмы"}</a>
                </li>
              </ul>
              <a href='/profile' className="header__account hover__button">{"Аккаунт"}</a>
            </nav>
          </div>
      ) : (
          <nav className="header__nav-main">
            <ul className="header__list">
              <li className="header__text header__text-main">
                <a className="header__link hover__link" href="/signup">{"Регистрация"}</a>
              </li>
            </ul>
            <a href="/signin" className="header__text-enter">Войти</a>
          </nav>
      )}
      </div>
    </header>
  );
}

export default Header;
