class Api {
  constructor( { baseUrl, headers } ) {
    this._url = baseUrl;
    this._headers = headers
  }

  _response(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }


  // Загружаем карточки в разделе "ФИЛЬМЫ"
  getInitialCards() {
    return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._response(res));
  }

  // Загружаем карточки в разделе "Сохраенные фильмы"
  getInitialSaveCards() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(res => this._response(res));
  }

  // Добавление карточки на сервер
  addNewCard(item) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(item)
    })
      .then(res => this._response(res));
  }

  // Удаляем карточки с сервера
  deleteCard(_id) {
    return fetch(`${this._url}/movies/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(res => this._response(res));
  }

}

// подключение к API
const api = new Api({
  // baseUrl: 'http://localhost:4000',
  baseUrl: 'https://api.a-ryabcev-films.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
