import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesMoreButton from "./MoviesMoreButton/MoviesMoreButton";

function Movies() {

  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <MoviesMoreButton></MoviesMoreButton>
    </main>
  );
}

export default Movies;
