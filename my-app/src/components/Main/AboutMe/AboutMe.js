import './AboutMe.css';
import myPhoto from '../../../images/myPhoto.jpeg';

function AboutMe() {

  return (
    <section id="about-me" className="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__paragraph">
        <img className="about-me__image" src={myPhoto} lang="ru" alt="Моё фото"/>
        <div className="about-me__paragraph-content">
            <p className="about-me__subName">Артем</p>
            <p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
            <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <p className="about-me__github">Github</p>
        </div>
      </div>

      <p className="about-me__portfolio-title">Портфолио</p>
      <div className="about-me__portfolio">
        <p className="about-me__portfolio-item">Статичный сайт</p>
        <p className="about-me__portfolio-arrow">
          <a className="about-me__portfolio-arrow-link" href="https://art9929.github.io/how-to-learn/index.html" target="_blank">↗</a>
        </p>
      </div>
      <div className="about-me__portfolio">
        <p className="about-me__portfolio-item">Адаптивный сайт</p>
        <p className="about-me__portfolio-arrow">
          <a className="about-me__portfolio-arrow-link" href="https://art9929.github.io/russian-travel/index.html" target="_blank">↗</a>
        </p>
      </div>
      <div className="about-me__portfolio">
        <p className="about-me__portfolio-item">Одностраничное приложение</p>
        <p className="about-me__portfolio-arrow">
          <a className="about-me__portfolio-arrow-link" href="https://art9929.github.io/mesto/index.html" target="_blank">↗</a>
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
