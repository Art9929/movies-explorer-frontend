import "./SearchForm.css";
import { useState, useEffect } from "react";

function SearchForm({handleSubmitSerach, shortFilmsAction, token, shortFilmsClick}) {
  const [name, setMovies] = useState("");
  const [checkedBtn, setCheckedBtn] = useState(null);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Функция. Передаём значения управляемых компонентов во внешний обработчик
    handleSubmitSerach(name);
  }

  function handleChangeName(e) {
    setMovies(e.target.value);
  }

  useEffect(() => {
    token && setMovies(token.search); // проверяем значение в input
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    shortFilmsClick && setCheckedBtn("checked")
  }, [shortFilmsClick]);

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
            name="name"
            type="text"
            placeholder="Фильм"
            className="search-form__film"
            required
            onChange={handleChangeName}
            value={name || ""}
          ></input>
          <button
            aria-label="Поиск"
            type="submit"
            className="search-form__subnit hover__button"
            onClick={handleSubmit}
            >
            </button>
        </div>
        <div className="search-form__right-part">
          <i className="search-form__vertical-stroke"></i>
          <input id="switch" type="checkbox" name="checkbox" className="search-form__checkbox" onChange={() => setCheckedBtn((state) => !state)} defaultChecked={checkedBtn}/>
          <label htmlFor="switch" className="search-form__checkbox-label" onClick={shortFilmsAction}></label>
          <p className="search-form__short-films">Короткометражки</p>
        </div>
      </form>
      <hr className="search-form__line"></hr>
    </section>
  );
}

export default SearchForm;
