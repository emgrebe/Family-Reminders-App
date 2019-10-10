const BASE_URL = '/api/reminders';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(msg) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(msg)
  }).then(res => res.json());
}

export function update(msg) {
  return fetch(`${BASE_URL}/${msg._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(msg)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}