const BASE_URL = '/api/familyMembers';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(person) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(person)
  }).then(res => res.json());
}

export function update(person) {
  return fetch(`${BASE_URL}/${person._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(person)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}