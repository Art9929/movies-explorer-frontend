import './Profile.css';
import { useState } from "react";

function Profile() {

  const [setEditProfileActive, setEditProfile] = useState("");

  function openEditMenu() {
    setEditProfile(setEditProfileActive => !setEditProfileActive);
  }

  const toggleMenuPopup = setEditProfileActive ? true : false;

  return (
    <main className='main'>
      <section className="profile">
        <h1 className="profile__title">Привет, Имя!</h1>
        <form
          method="post"
          name="profile"
          action="#"
          className="profile__form"
        >
        <input
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            className="profile__input"
            minLength="2"
            maxLength="30"
            required
            disabled="disabled"
          />
        <div className="profile__line"></div>
        <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className="profile__input"
            minLength="2"
            maxLength="30"
            required
            disabled="disabled"
          />
          { toggleMenuPopup === true &&
          <>
            <span
              className="profile__error"
              // className="profile__error profile__error_visible"
              >
                При обновлении профиля произошла ошибка.
            </span>
            <button
              aria-label="Редактировать"
              type="submit"
              className="profile__edit profile__edit_active hover__button"
              // className="profile__edit profile__edit_active profile__edit_disabled"
              disabled="disabled"
              >
                Сохранить
            </button>
          </>
          }
        </form>
        { toggleMenuPopup === false &&
        <>
          <button
            aria-label="Редактировать"
            type="submit"
            className="profile__edit hover__button"
            onClick={openEditMenu}
            >
              Редактировать
          </button>
          <a href="/signin"  className="profile__exit">Выйти из аккаунта</a>
        </>
        }
      </section>
    </main>
  );
}

export default Profile;
