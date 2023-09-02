import EnterWithForm from "../EnterWithForm/EnterWithForm";
import "./Register.css";

function Register() {

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  }

  return (
    <main className="main">
      <EnterWithForm
        title="Добро пожаловать!"
        method="post"
        onSubmit={handleSubmit}
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="/signin"
        textLink="Войти"
      >
        <label className="register__label" for="name">
          Имя
        </label>
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
        <label className="register__label" for="email">
          E-mail
        </label>
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
        <label className="register__label" for="password">
          Пароль
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          className="register__input"
          required
        />
        <span className="register__error"></span>
      </EnterWithForm>
    </main>
  );
}

export default Register;
