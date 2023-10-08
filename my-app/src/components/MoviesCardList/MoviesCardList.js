import "./MoviesCardList.css";

function MoviesCardList({ searchIsNothingFound, searchIsNull, serverError, isLoading, moviesCardFilter }) {
  return (
    <>
      {
        searchIsNull === false
        ?
          <h3 className="movies-card-list__error">Нужно ввести ключевое слово</h3>
        :
        searchIsNothingFound === false
        ?
          <h3 className="movies-card-list__error">Ничего не найдено</h3>
        :
        isLoading ? (
          <div>Загрузка фильмов...</div>
        ) : serverError ? (
          <h3 className="movies-card-list__error">
            «Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз».
          </h3>
        ) : (
          <section className="movies-card-list">{moviesCardFilter}</section>
        )
      }
    </>
  );
}

export default MoviesCardList;
