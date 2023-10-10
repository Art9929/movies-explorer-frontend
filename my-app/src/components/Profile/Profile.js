import './Profile.css';
import { useState, useEffect, useContext  } from "react";
import { UserContext } from "../contexts/CurrentUserContext"; // Контекст

function Profile({onUpdateUser, statusProfile, logOut}) {

  // Записываем данные в форму
  const currentUser = useContext(UserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // блокируем кнопку, что бы не отправить форму повторно
    setIsDisabledBtn("disabled", "disabled")
    // Функция. Передаём значения управляемых компонентов во внешний обработчик
 onUpdateUser({
      name,
      email: email,
    });
    setIsValid(false)
  }
  function handleChangeName(e) {
    const value = e.target.value;

    const name = e.target.name;
    setErrors({...errors, [name]: e.target.validationMessage });

    setName(value);
    currentUser.name !== value ? setIsValid(e.target.closest("form").checkValidity()) : setIsValid(false);
  }

  function handleChangeEmail(e) {
    const value = e.target.value;

    const name = e.target.name;
    setErrors({...errors, [name]: e.target.validationMessage });

    setEmail(value);
    currentUser.email !== value ? setIsValid(e.target.closest("form").checkValidity()) : setIsValid(false);
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

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
    if (isValid) {setisValidBtn(''); setIsDisabledBtn('')} else { setisValidBtn("profile__edit_disabled"); setIsDisabledBtn("disabled", "disabled") }
  }, [isValid])

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
            placeholder=""
            className="profile__input"
            minLength="2"
            maxLength="30"
            required
            value={name || ""}
            onChange={handleChangeName}
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
            placeholder=""
            className="profile__input"
            minLength="2"
            maxLength="30"
            required
            value={email || ""}
            onChange={handleChangeEmail}
          />
        <span className="profile__error">{errors.email}</span>
          { toggleMenuPopup === true &&
          <>
            <span className={`profile__error_active ${statusProfile && statusProfile.class}`} >
              {statusProfile && statusProfile.textAuth}
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
