function MoviesCardFilter({ card, values, moviesCard }) {
  if (values === "") return

  const search = (values || '').toLowerCase().trim();

if (
  card.nameRU.toLowerCase().trim().indexOf(search) > -1 ||
  card.nameEN.toLowerCase().trim().indexOf(search) > -1
) return <>{moviesCard}</>;

}

export default MoviesCardFilter;
