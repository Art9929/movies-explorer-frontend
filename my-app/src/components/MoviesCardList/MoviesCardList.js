import "./MoviesCardList.css";

function MoviesCardList({moviesCardFilter}) {

  return (
    <section className="movies-card-list">
      {moviesCardFilter}
    </section>
  );
}

export default MoviesCardList;
