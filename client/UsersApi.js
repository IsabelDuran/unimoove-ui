const PORT = '8080';
const BASE_URL = `http://192.168.1.56:${PORT}`;

export function addUser(userRegistrationRequest) {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(userRegistrationRequest),
  });
}

export function getUser(username, token) {
  return fetch(`${BASE_URL}/users/${username}`, {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'X-API-KEY': token,
    }),
  });
}

export function userLogin(loginRequest) {
  return fetch(`${BASE_URL}/authentication/login`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(loginRequest),
  });
}
