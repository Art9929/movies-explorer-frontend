import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="searchForm">
      <form
        method="post"
        name="popup-form"
        action="#"
        className="searchForm__form"
      >
        <div className="searchForm__left-part">
          <i className="searchForm__find"></i>
          <input
            id="name-film"
            name="film"
            type="text"
            placeholder="Фильм"
            className="searchForm__film"
            minLength="2"
            maxLength="30"
            required
          ></input>
          <button aria-label="Поиск" type="submit" className="searchForm__subnit"></button>
        </div>
        <div className="searchForm__right-part">
          <i className="searchForm__vertical-stroke"></i>
          <i className="searchForm__smalltumb"></i>
          <p className="searchForm__short-films">Короткометражки</p>
        </div>
      </form>
      <hr className="searchForm__line"></hr>
    </section>
  );
}

export default SearchForm;
