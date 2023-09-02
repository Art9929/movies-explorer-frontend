import EnterWithForm from "../EnterWithForm/EnterWithForm";
import "./Login.css";

function Login({handleChange, handleSubmit, values, errors, isValidForm}) {

  return (
    <main className="main">
      <EnterWithForm
        title="Рады видеть!"
        method="post"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        link="/signup"
        textLink="Регистрация"
        handleSubmit={handleSubmit}
        isValidForm={isValidForm}
      >
          <label className="login__label" htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="pochta@yandex.ru"
            className="login__input"
            minLength="2"
            maxLength="30"
            required
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="login__error">{errors.email}</span>
          <label className="login__label" htmlFor="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            className="login__input"
            minLength="6"
            maxLength="30"
            required
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="login__error">{errors.password}</span>
      </EnterWithForm>
    </main>
  );
}

export default Login;
