import './NavTab.css';

function NavTab() {

  return (
    <section className="nav-tab">
      <nav className="nav-tab__navigate">
        <ul className="nav-tab__list">
          <li className="nav-tab__text"><a href="#about-project" className="nav-tab__link hover__link">О проекте</a></li>
          <li className="nav-tab__text"><a href="#techs" className="nav-tab__link hover__link">Технологии</a></li>
          <li className="nav-tab__text"><a href="#about-me" className="nav-tab__link hover__link">Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
