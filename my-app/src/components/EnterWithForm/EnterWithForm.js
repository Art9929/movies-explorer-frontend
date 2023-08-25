import "./EnterWithForm.css";
import "../Header/Header.css";

function EnterWithForm({ children, title, method, buttonText, onSubmit, text, link, textLink }) {
  return (
    <section className="enter-width-form">
      <div className="enter-width-form__logo-position">
        <a href="/" className="header__logo"></a>
      </div>
      <h1 className="enter-width-form__title">{title}</h1>
      <form
        method={method}
        name=""
        action="#"
        className="enter-width-form__form"
        onSubmit={onSubmit}
      >
        {children}
        <button
          aria-label={buttonText}
          type="submit"
          className="enter-width-form__button hover__button"
        >
          {buttonText}
        </button>
      </form>

      <p className="enter-width-form__enter-text">
        {text}
        <a href={link} className="enter-width-form__enter hover__link-blue">
          {textLink}
        </a>
      </p>
    </section>
  );
}

export default EnterWithForm;
