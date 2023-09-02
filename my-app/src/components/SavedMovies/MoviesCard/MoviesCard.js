import "./MoviesCard.css";
import film1 from "../../../images/films/film_1.png";
import film2 from "../../../images/films/film_2.png";
import film3 from "../../../images/films/film_3.png";
import film4 from "../../../images/films/film_4.png";
import film5 from "../../../images/films/film_5.png";
import film6 from "../../../images/films/film_6.png";
import film7 from "../../../images/films/film_7.png";
import film8 from "../../../images/films/film_8.png";

function MoviesCard() {
  return (
    <>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film1}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button type="button" aria-label="Фильм" className="movies-card__button"></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film2}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button className="movies-card-active__button"></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film3}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button type="button" aria-label="Фильм" className="movies-card__button"></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film4}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button type="button" aria-label="Фильм" className="movies-card__button"></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film5}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button className="movies-card-active__button"></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film6}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button type="button" aria-label="Фильм" className="movies-card__button"></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film7}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button type="button" aria-label="Фильм" className="movies-card__button"></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film8}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button className="movies-card-active__button"></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
