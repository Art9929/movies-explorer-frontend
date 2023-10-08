import EnterWithForm from "../EnterWithForm/EnterWithForm";
import "./Register.css";

function Register({handleChange, handleSubmit, values, errors, isValidForm, statusProfile}) {

  return (
    <main className="main">
      <EnterWithForm
        title="Добро пожаловать!"
        method="post"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="/signin"
        textLink="Войти"
        handleSubmit={handleSubmit}
        isValidForm={isValidForm}
        statusProfile={statusProfile}
      >
        <label className="register__label" htmlFor="name">
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
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="register__error">{errors.name}</span>
        <label className="register__label" htmlFor="email">
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
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="register__error">{errors.email}</span>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          className="register__input"
          minLength="6"
          maxLength="30"
          required
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="register__error">{errors.password}</span>
      </EnterWithForm>
    </main>
  );
}

export default Register;
