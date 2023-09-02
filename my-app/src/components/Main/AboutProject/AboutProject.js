import './AboutProject.css';

function AboutProject() {

  return (
    <section id="about-project" className="about-project">
      <h3 className="about-project__title">О проекте</h3>
      <ul  className="about-project__list">
        <li className="about-project__paragraph">
          <h4 className="about-project__title-paragraph">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="about-project__text-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__paragraph">
          <h4 className="about-project__title-paragraph">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="about-project__text-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__timeLine">
        <p className="about-project__timeLine-backend">1 неделя</p>
        <p className="about-project__timeLine-frontend">4 недели</p>
      </div>
      <div className="about-project__timeLine">
        <p className="about-project__backend">Back-end</p>
        <p className="about-project__frontend">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
