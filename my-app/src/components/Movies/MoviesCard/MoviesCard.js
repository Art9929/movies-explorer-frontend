import "./MoviesCard.css";
import film1 from "../../../images/films/film_1.png";
import film2 from "../../../images/films/film_2.png";
import film3 from "../../../images/films/film_3.png";
import film4 from "../../../images/films/film_4.png";
import film5 from "../../../images/films/film_5.png";
import film6 from "../../../images/films/film_6.png";
import film7 from "../../../images/films/film_7.png";
import film8 from "../../../images/films/film_8.png";
import film9 from "../../../images/films/film_9.png";
import film10 from "../../../images/films/film_10.png";
import film11 from "../../../images/films/film_11.png";
import film12 from "../../../images/films/film_12.png";
import film13 from "../../../images/films/film_13.png";
import film14 from "../../../images/films/film_14.png";
import film15 from "../../../images/films/film_15.png";
import film16 from "../../../images/films/film_16.png";

function MoviesCard({
  moviesCardButton,
  moviesCardActiveButton,
  moviesCardDeleteButton
}) {
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
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
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
          <button className={moviesCardActiveButton}></button>
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
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
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
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
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
          <button className={moviesCardActiveButton}></button>
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
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
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
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
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
          <button className={moviesCardActiveButton}></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film9}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film10}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film11}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button className={moviesCardActiveButton}></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film12}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film13}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button className={moviesCardActiveButton}></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film14}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film15}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <div className={`${moviesCardButton} ${moviesCardDeleteButton}`}></div>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={film16}
          alt="33 слова о дизайне"
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">33 слова о дизайне</h3>
          <button className={moviesCardActiveButton}></button>
          <p className="movies-card__film-duration">1ч42м</p>
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
