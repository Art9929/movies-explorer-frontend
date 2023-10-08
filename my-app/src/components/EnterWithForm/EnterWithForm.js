import "./EnterWithForm.css";
import "../Header/Header.css";
import { useState, useEffect} from "react";

function EnterWithForm({ children, title, method, buttonText, text, link, textLink, handleSubmit, isValidForm, statusProfile}) {

  const [isValidBtn, setisValidBtn] = useState("enter-with-form__edit_disabled");
  const [isDisabledBtn, setIsDisabledBtn] = useState("disabled", "disabled");

  useEffect(() => {
    if(isValidForm) {setisValidBtn(''); setIsDisabledBtn('')} else { setisValidBtn("register__edit_disabled"); setIsDisabledBtn("disabled", "disabled") }
  }, [isValidForm])

  return (
    <section className="enter-with-form">
      <div className="enter-with-form__logo-position">
        <a href="/" className="header__logo hover__button"> </a>
      </div>
      <h1 className="enter-with-form__title">{title}</h1>
      <form
        method={method}
        name="register"
        action="#"
        className="enter-with-form__form"
        onSubmit={handleSubmit}
        noValidate
      >
        {children}

      <span className={`profile__error_active ${statusProfile && statusProfile.class}`} >
            {statusProfile && statusProfile.textAuth}
      </span>

        <button
          aria-label={buttonText}
          type="submit"
          className={`enter-with-form__button hover__button ${isValidBtn} `}
          disabled={isDisabledBtn}
        >
          {buttonText}
        </button>
      </form>
      <p className="enter-with-form__enter-text">
        {text}
        <a href={link} className="enter-with-form__enter hover__link">
          {textLink}
        </a>
      </p>
    </section>
  );
}

export default EnterWithForm;
