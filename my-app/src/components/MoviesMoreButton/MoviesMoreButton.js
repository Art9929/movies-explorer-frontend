import "./MoviesMoreButton.css";

function MoviesMoreButton({moviesMoreBtn, handleClick, values}) {
  if (values === "") return
  return (
    moviesMoreBtn === true &&
    <section className="movies-more-button">
      <button type="button" aria-label="Загрузить фильмы" className="movies-more-button_main" onClick={handleClick}>Ещё</button>
    </section>

  );
}

export default MoviesMoreButton;
