import "./Register.css";
import "../Header/Header.css";

function Register() {
  return (
    <main className="main">
      <section className="register">
        <div className="register__logo-position">
          <a href="/" className="header__logo"></a>
        </div>
        <h3 className="register__title">Добро пожаловать!</h3>
        <form method="post" name="register" action="#" className="register__form">
          <label className="register__label" for="name">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            className="register__input"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="register__error"></span>
          <label className="register__label" for="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className="register__input"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="register__error"></span>
          <label className="register__label" for="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            className="register__input"
            required
          />
          <span className="register__error"></span>
          <button
            aria-label="Зарегистрироваться"
            type="submit"
            className="register__button"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="register__enter-text">Уже зарегистрированы?
          <a href="/signin" className="register__enter">Войти</a>
        </p>
      </section>
    </main>
  );
}

export default Register;
