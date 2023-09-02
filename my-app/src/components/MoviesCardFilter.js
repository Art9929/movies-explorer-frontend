function MoviesCardFilter({card, ShortFilmsClick, moviesCard}) {

const filterMoviesCard = (card) => {
    if(card.duration < 40) {
      return <>{moviesCard}</>
    } else {
      return ""
    }
  }

  return (
    ShortFilmsClick ? filterMoviesCard(card) : ( <>{moviesCard}</> )
  );
}

export default MoviesCardFilter;
