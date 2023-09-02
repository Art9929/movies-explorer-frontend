import './Main.css';


function Main({promo, navTab, aboutProject, techs, aboutMe, portfolio, footer}) {

  return (
    <main className="main">
      {promo}
      {navTab}
      {aboutProject}
      {techs}
      {aboutMe}
      {portfolio}
      {footer}
    </main> // Main
  );
}

export default Main;
