const BASE_URL = '/api/reminders';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function creae(reminder) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(reminder)
  }).then(res => res.json());
}