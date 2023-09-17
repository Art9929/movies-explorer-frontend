import "./MoviesCard.css";
import { useState, useEffect} from "react";

function MoviesCard({
  card,
  saveCards,
  moviesActionCardButton,
  disLikeBtnCard
}) {

const [likeBtnCard, setlikeBtnCard] = useState(""); // Кнопка Лайка Карточки

function handleLikeBtnCard() {
  setlikeBtnCard(likeBtnCard => !likeBtnCard);
}
const toggleMenuPopup = likeBtnCard ? 'movies-card-active__button' : '';

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


function moviesDeleteCardButtoт() {
  moviesActionCardButton()
  // delete card.like;
}
// Проверяем на наличие лайков
useEffect(() => {
  if (saveCards) {
    saveCards.forEach(saveCard => {
      if (saveCard.movieId === card.id) setlikeBtnCard("movies-card-active__button");;
    });
  }
  if (card._id) {
    card.like = "like";
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return (
    <>
      <article className="movies-card__films">
        <a className="movies-card__film-link" href={card.trailerLink} rel="nofollow" target="_blank">
          <img
            className="movies-card__film-img"
            src={srcImg}
            alt={card.nameRU}
            lang="ru"
          ></img>
        </a>
        <div className="movies-card__name">
          <h3 className="movies-card__film-title">{card.nameRU}</h3>
          <button
            aria-label="Поиск"
            type="submit"
            className={`movies-card__button ${toggleMenuPopup} ${disLikeBtnCard}`}
            // className="movies-card__button movies-card-active__button movies-card-delete__button"
            onClick={() =>{ moviesDeleteCardButtoт(); handleLikeBtnCard(); }}
            >
            </button>
          <p className="movies-card__film-duration">{durationFilm(card.duration)}</p>
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
