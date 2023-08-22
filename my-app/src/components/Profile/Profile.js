import './Profile.css';

function Profile({loggedIn, navigateMenu}) {
  return (
    <main className='main'>
      <section className="profile">
        <h3 className="profile__title">Привет, Имя!</h3>
        <form
          method="post"
          name="profile"
          action="#"
          className="profile__form"
        >
        <input
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            className="profile__input"
            minLength="2"
            maxLength="30"
            required
          />
        <div className="profile__line"></div>
        <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className="profile__input"
            minLength="2"
            maxLength="30"
            required
          />
          <button aria-label="Редактировать" type="submit" className="profile__edit">Редактировать</button>
        </form>
        <a href="/signin"  className="profile__exit">Выйти из аккаунта</a>
      </section>
    </main>
  );
}

export default Profile;
