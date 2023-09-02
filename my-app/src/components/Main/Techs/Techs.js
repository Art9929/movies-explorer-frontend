import './Techs.css';

function Techs() {

  return (
    <section id="techs" className="techs">
      <h3 className="techs__title">Технологии</h3>
      <div className="techs__paragraph">
        <h2 className="techs__subName">7&nbsp;технологий</h2>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
