import './AboutMe.css';
import myPhoto from '../../images/myPhoto.jpeg';

function AboutMe() {

  return (
    <section id="about-me" className="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__paragraph">
        <img className="about-me__image" src={myPhoto} lang="ru" alt="Моё фото"/>
        <div className="about-me__paragraph-content">
            <p className="about-me__subName">Артем</p>
            <p className="about-me__subtitle">Web-разработчик, 29 лет</p>
            <p className="about-me__description">
            Я родился в Москве и всегда интересовался айти и новыми технологиями. В последние годы активно изучаю языки програмирования. Есть несколько пет-проектов на php (laravel). В 2023 году увеличил своё портфолио проектами на HTML/CSS, JS (React), Node.js (Express, Mongo), которые мне удалось подготовить в Яндекс Практикуме.
            </p>
            <a target="_blank" href='https://github.com/Art9929/' className="about-me__github hover__link">Github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
