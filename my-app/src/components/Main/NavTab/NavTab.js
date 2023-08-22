import './NavTab.css';

function NavTab() {

  return (
    <section className="navTab">
      <nav className="navTab__navigate">
        <ul className="navTab__list">
          <li className="navTab__text"><a href="#aboutProject" className="navTab__link">О проекте</a></li>
          <li className="navTab__text"><a href="#techs" className="navTab__link">Технологии</a></li>
          <li className="navTab__text"><a href="#aboutMe" className="navTab__link">Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
