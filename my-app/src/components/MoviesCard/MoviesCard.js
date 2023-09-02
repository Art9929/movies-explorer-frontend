import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard({
  card,
  moviesLikeCardButton,
  disLikeBtnCard
}) {

const [likeBtnCard, setlikeBtnCard] = useState(""); // Кнопка Лайка Карточки


  // Получаем "непустые" карточки
if (card === false ) return

// Так как картинки не храним на своем сервере, то подгружаем с внешнего
// Выводим урл на страницу "Фильмы" или на страницу "Сохранённые фильмы"
const srcImg = card.image.url ? "https://api.nomoreparties.co"+card.image.url : card.image;

function durationFilm(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const stringHours = hours > 0 ? `${hours}ч` : "";
  const stringMinutes = minutes > 0 ? `${minutes}м` : "";
  return `${stringHours} ${stringMinutes}`.trim();
}

function handleLikeBtnCard() {
  setlikeBtnCard("movies-card-active__button");
}

  return (
    <>
      <article className="movies-card__films">
        <img
          className="movies-card__film-img"
          src={srcImg}
          alt={card.nameRU}
          lang="ru"
        ></img>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">{card.nameRU}</h3>
          <button
            aria-label="Поиск"
            type="submit"
            className={`movies-card__button ${likeBtnCard} ${disLikeBtnCard}`}
            // className="movies-card__button movies-card-active__button movies-card-delete__button"
            onClick={() =>{ moviesLikeCardButton(); handleLikeBtnCard(); }}
            >
            </button>
          <p className="movies-card__film-duration">{durationFilm(card.duration)}</p>
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
