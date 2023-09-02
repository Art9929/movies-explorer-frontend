import "./SavedMovies.css";

function SavedMovies({searchForm, moviesCardList, footer}) {
  return (
    <main className="saved-movies">
      {searchForm}
      {moviesCardList}
      {footer}
    </main>
  );
}

export default SavedMovies;
