import './AboutProject.css';

function AboutProject() {

  return (
    <section className="aboutProject">
      <a name="aboutProject"></a>
      <h3 className="aboutProject__title">О проекте</h3>
      <ul  className="aboutProject__list">
        <li className="aboutProject__paragraph">
          <h4 className="aboutProject__title-paragraph">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="aboutProject__text-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="aboutProject__paragraph">
          <h4 className="aboutProject__title-paragraph">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="aboutProject__text-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="aboutProject__timeLine">
        <p className="aboutProject__timeLine-backend">1 неделя</p>
        <p className="aboutProject__timeLine-frontend">4 недели</p>
      </div>
      <div className="aboutProject__timeLine">
        <p className="aboutProject__backend">Back-end</p>
        <p className="aboutProject__frontend">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
