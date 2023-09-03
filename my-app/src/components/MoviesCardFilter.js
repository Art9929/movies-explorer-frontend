function MoviesCardFilter({ card, values, ShortFilmsClick, moviesCard }) {
if (values) {
  function filterSearch(card) {
    const search = values.toLowerCase().trim();
    if (
      card.nameRU.toLowerCase().trim().indexOf(search) > -1 ||
      card.nameEN.toLowerCase().trim().indexOf(search) > -1
    ) {
      return card;
    } else {
      return false;
    }
  }

  card = filterSearch(card);
  if (card === false ) return
}

  const filterMoviesCard = (card) => {
    if (card.duration < 40) {
      return <>{moviesCard}</>;
    } else {
      return "";
    }
  };

  return ShortFilmsClick ? filterMoviesCard(card) : <>{moviesCard}</>;
}

export default MoviesCardFilter;
