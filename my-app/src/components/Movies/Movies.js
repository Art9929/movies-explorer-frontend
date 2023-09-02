import './Movies.css';

function Movies({searchForm, moviesCardList, moviesMoreButton, footer}) {

  return (
    <main className="movies">
        {searchForm}
        {moviesCardList}
        {moviesMoreButton}
        {footer}
    </main>
  );
}

export default Movies;
