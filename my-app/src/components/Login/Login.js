import EnterWithForm from "../EnterWithForm/EnterWithForm";
import "./Login.css";

function Login() {
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  }

  return (
    <main className="main">
      <EnterWithForm
        title="Рады видеть!"
        method="post"
        onSubmit={handleSubmit}
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        link="/signup"
        textLink="Регистрация"
      >
          <label className="login__label" for="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="pochta@yandex.ru"
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
      </EnterWithForm>
    </main>
  );
}

export default Login;
