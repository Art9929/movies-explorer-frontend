export const BASE_URL = 'http://api.a-ryabcev-films.nomoreparties.co';

// Страница входа
export const signup = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then(_response => {
    if (_response.ok) {
        return _response.json();
    }
    return _response.json();
    // return Promise.reject(`Ошибка ${_response.status}`);
})
  .then((res) => {
    return res;
  })
};

// Авторизация
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(_response => {
    if (_response.ok) {
        return _response.json();
    }
    return Promise.reject(`Ошибка ${_response.status}`);
})
  .then((data) => {
    if (data.token){
      localStorage.setItem('jwt', data.token);
      return data;
    }
  })
};

// Ред. профиль
export const editProfile = ( info ) => {
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: this._headers,
    body: JSON.stringify( info )
  })
    .then(res => this._response(res));
}

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(_response => {
    if (_response.ok) {
        return _response.json();
    }
    return Promise.reject(`Ошибка ${_response.status}`);
})
  .then(data => data)
}


// Выход
export const logOut = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(data => data)
  .catch((err) => console.error(err));
}
