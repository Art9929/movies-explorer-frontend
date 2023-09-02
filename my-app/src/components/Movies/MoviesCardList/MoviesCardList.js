import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  moviesCardButton,
  moviesCardActiveButton,
  moviesCardDeleteButton
}) {
  return (
    <section className="movies-card-list">
       <MoviesCard
          moviesCardButton={moviesCardButton}
          moviesCardActiveButton={moviesCardActiveButton}
          moviesCardDeleteButton={moviesCardDeleteButton}
       />
    </section>
  );
}

export default MoviesCardList;
