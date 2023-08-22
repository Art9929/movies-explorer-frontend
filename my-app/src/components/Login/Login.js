import "./Login.css";
import "../Header/Header.css";

function Login() {
  return (
    <main className="main">
      <section className="login">
        <div className="login__logo-position">
          <a href="/" className="header__logo"></a>
        </div>
        <h3 className="login__title">Рады видеть!</h3>
        <form method="post" name="login" action="#" className="login__form">
          <label className="login__label" for="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="pochta@yandex.ru|"
            className="login__input"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="login__error"></span>
          <label className="login__label" for="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            className="login__input"
            required
          />
          <span className="login__error"></span>
          <button
            aria-label="Войти"
            type="submit"
            className="login__button"
          >
            Войти
          </button>
        </form>
        <p className="login__enter-text">Ещё не зарегистрированы?
          <a href="/signup" className="login__enter">Регистрация</a>
        </p>
      </section>
    </main>
  );
}

export default Login;
