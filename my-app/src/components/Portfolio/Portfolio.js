import './Portfolio.css';

function Portfolio() {

  return (
    <div className="portfolio">
     <p className="portfolio__title">Портфолио</p>
      <div className="portfolio__paragraf">
        <p className="portfolio__item">Статичный сайт</p>
        <p className="portfolio__arrow">
          <a className="portfolio__arrow-link hover__link" href="https://art9929.github.io/how-to-learn/index.html" target="_blank">↗</a>
        </p>
      </div>
      <div className="portfolio__paragraf">
        <p className="portfolio__item">Адаптивный сайт</p>
        <p className="portfolio__arrow">
          <a className="portfolio__arrow-link hover__link" href="https://art9929.github.io/russian-travel/index.html" target="_blank">↗</a>
        </p>
      </div>
      <div className="portfolio__paragraf">
        <p className="portfolio__item">Одностраничное приложение</p>
        <p className="portfolio__arrow">
          <a className="portfolio__arrow-link hover__link" href="https://art9929.github.io/mesto/index.html" target="_blank">↗</a>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
