import "./Header.css";
import { useState, useEffect} from "react";

function Header({ loggedIn, navigateMenu }) {

  const [setPopupMenuActive, setPopupMenu] = useState("");
  const [setPopupMenuNavigateActive, setPopupMenuNavigate] = useState("");
  const [setPopupMenuExiteActive, setPopupMenuExit] = useState("");

  function openPopupMenu() {
    setPopupMenu(setPopupMenuActive => !setPopupMenuActive);
    setPopupMenuNavigate(setPopupMenuNavigateActive => !setPopupMenuNavigateActive);
    setPopupMenuExit(setPopupMenuExiteActive => !setPopupMenuExiteActive);
  }

  const toggleMenuPopup = setPopupMenuActive ? 'header__menu_active' : '';
  const toggleMenuNavigatePopup = setPopupMenuNavigateActive ? 'header__nav_active' : '';
  const toggleMenuBurgerPopup = setPopupMenuExiteActive ? 'header__burger-exit' : '';

  return (
    <header className={`header ${loggedIn ? "header_white" : "header_gray"}`}>
        <div className={`header__menu ${toggleMenuPopup}`}>
          <div className="header__wrapper-logo">
            <a href="/" className="header__logo"></a>
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
                  <a className="header__link" href="/">{"Главная"}</a>
                </li>
                <li className="header__text">
                  <a className="header__link" href="/movies">{"Фильмы"}</a>
                </li>
                <li className="header__text">
                  <a className="header__link" href="/savemovies">{"Сохранённые фильмы"}</a>
                </li>
              </ul>
              <button
                aria-label={"Аккаунт"}
                className="header__account"
                type="button"
              >
                {/* onClick={navigateMenu}> */}
                <div className="header__account-logo"></div>
                <a href='/profile' className="header__account-text">{"Аккаунт"}</a>
            </button>
            </nav>
          </div>
      ) : (
          <nav className="header__nav-main">
            <ul className="header__list">
              <li className="header__text-main">
                <a className="header__link" href="/">{"Регистрация"}</a>
              </li>
            </ul>
            <button
              aria-label="Войти"
              className="header__text-exit"
              type="button"
            >
              {/* onClick={removeToken}> */}
              Войти
          </button>
          </nav>
      )}
      </div>
    </header>
  );
}

export default Header;
