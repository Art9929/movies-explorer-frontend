import './AboutMe.css';
import myPhoto from '../../../images/myPhoto.jpeg';

function AboutMe() {

  return (
    <section className="aboutMe">
      <a name="aboutMe"></a>
      <h3 className="aboutMe__title">Студент</h3>
      <div className="aboutMe__paragraph">
        <div className="aboutMe__paragraph-content">
          <img className="aboutMe__image" src={myPhoto} lang="ru" alt="Моё фото"/>
          <p className="aboutMe__subName">Артем</p>
          <p className="aboutMe__subtitle">Фронтенд-разработчик, 29 лет</p>
          <p className="aboutMe__description">
            Описание
          </p>
        </div>
        <p className="aboutMe__github">Github</p>
      </div>

      <p className="aboutMe__portfolio-title">Портфолио</p>
      <div className="aboutMe__portfolio">
        <p className="aboutMe__portfolio-item">Статичный сайт</p>
        <p className="aboutMe__portfolio-arrow">
          <a className="aboutMe__portfolio-arrow-link" href="https://art9929.github.io/how-to-learn/index.html" target="_blank">↗</a>
        </p>
      </div>
      <div className="aboutMe__portfolio">
        <p className="aboutMe__portfolio-item">Адаптивный сайт</p>
        <p className="aboutMe__portfolio-arrow">
          <a className="aboutMe__portfolio-arrow-link" href="https://art9929.github.io/russian-travel/index.html" target="_blank">↗</a>
        </p>
      </div>
      <div className="aboutMe__portfolio">
        <p className="aboutMe__portfolio-item">Одностраничное приложение</p>
        <p className="aboutMe__portfolio-arrow">
          <a className="aboutMe__portfolio-arrow-link" href="https://art9929.github.io/mesto/index.html" target="_blank">↗</a>
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
