import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <form
        method="post"
        name="popup-form"
        action="#"
        className="search-form__form"
      >
        <div className="search-form__left-part">
          <input
            id="name-film"
            name="film"
            type="text"
            placeholder="Фильм"
            className="search-form__film"
            minLength="2"
            maxLength="30"
            required
          ></input>
          <button aria-label="Поиск" type="submit" className="search-form__subnit"></button>
        </div>
        <div className="search-form__right-part">
          <i className="search-form__vertical-stroke"></i>
          <i className="search-form__smalltumb"></i>
          <p className="search-form__short-films">Короткометражки</p>
        </div>
      </form>
      <hr className="search-form__line"></hr>
    </section>
  );
}

export default SearchForm;
