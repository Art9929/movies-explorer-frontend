import './Profile.css';
import { useState, useEffect } from "react";

function Profile({currentUser, handleSubmit, handleChange, values, errors, isValidForm, errorProfile, logOut}) {

  // Изменение кнопки редактирования при нажатии
  const [setEditProfileActive, setEditProfile] = useState("");
  function openEditMenu() {
    setEditProfile(setEditProfileActive => !setEditProfileActive);
  }
  const toggleMenuPopup = setEditProfileActive ? true : false;

// Валидация
  const [isValidBtn, setisValidBtn] = useState("enter-with-form__edit_disabled");
  const [isDisabledBtn, setIsDisabledBtn] = useState("disabled", "disabled");

  useEffect(() => {
    if(isValidForm) {setisValidBtn(''); setIsDisabledBtn('')} else { setisValidBtn("profile__edit_disabled"); setIsDisabledBtn("disabled", "disabled") }
  }, [isValidForm])

  return (
    <main className='main'>
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}</h1>
        <form
          method="PATCH"
          name="profile"
          action="#"
          className="profile__form"
          onSubmit={handleSubmit}
          noValidate
        >
        <label className="profile__label" htmlFor="name">
          Имя
        </label>
        <input
            id="name"
            name="name"
            type="text"
            placeholder={currentUser.name}
            className="profile__input"
            minLength="2"
            maxLength="30"
            required
            value={values.name || ""}
            onChange={handleChange}
          />
        <span className="profile__error">{errors.name}</span>
        <div className="profile__line"></div>
        <label className="profile__label" htmlFor="name">
        email
        </label>
        <input
            id="email"
            name="email"
            type="email"
            placeholder={currentUser.email}
            className="profile__input"
            minLength="2"
            maxLength="30"
            required
            value={values.email || ""}
            onChange={handleChange}
          />
        <span className="profile__error">{errors.email}</span>
          { toggleMenuPopup === true &&
          <>
            <span className={`profile__error profile__error_active ${errorProfile}`} >
                При обновлении профиля произошла ошибка.
            </span>
            <button
              aria-label="Сохранить"
              type="submit"
              className={`profile__edit profile__edit_active hover__button ${isValidBtn}`}
              disabled={isDisabledBtn}
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
          <button
            aria-label="Выйти из аккаунта"
            type="button"
            className="profile__exit hover__button"
            onClick={logOut}
            >
              Выйти из аккаунта
          </button>
        </>
        }
      </section>
    </main>
  );
}

export default Profile;
