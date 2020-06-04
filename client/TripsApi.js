const PORT = '8080';
const BASE_URL = `http://192.168.1.59:${PORT}`;

export function addTrip(tripCreationRequest, token) {
  return fetch(`${BASE_URL}/trips`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'X-API-KEY': token,
    }),
    body: JSON.stringify(tripCreationRequest),
  });
}
