// export const BASE_URL = 'https://api.a-ryabcev-films.nomoreparties.co';
export const BASE_URL = 'http://localhost:4000';

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

// Загружаем профиль
export const profile = () => {
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
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${_response.status}`);
    })
}

// Ред. профиль
export const editProfile = ( info ) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( info )
  })
  .then(_response => {
    if (_response.ok) {
      return _response.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${_response.status}`);
  })
}

// Проверка токена
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
