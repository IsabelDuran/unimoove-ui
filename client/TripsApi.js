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

export function searchTrip(
  arrivalPlace,
  departureDateTime,
  departurePlace,
  page,
  size,
  token,
) {
  return fetch(
    `${BASE_URL}/trips?arrivalPlace=${arrivalPlace}&departureDateTime=${departureDateTime}&departurePlace=${departurePlace}&page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json',
        Accept: 'application/json',
        'X-API-KEY': token,
      }),
    },
  );
}

export function searchTripReservations(idTrip, page, size, token) {
  return fetch(
    `${BASE_URL}/trips/${idTrip}/reservations?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json',
        Accept: 'application/json',
        'X-API-KEY': token,
      }),
    },
  );
}
