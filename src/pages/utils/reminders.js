import tokenService from './tokenService';
const BASE_URL = '/api/reminders';


console.log(tokenService.getToken)  

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(msg) {
  console.log('bing bong')
  return fetch(`${BASE_URL}/create`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization' : `Bearer ${tokenService.getToken()}`
  },
    body: JSON.stringify({msg})
  }).then(res => res.json());
}

export function update(msg) {
  return fetch(`${BASE_URL}/${msg._id}`, {
    method: 'PUT',
    headers: {
    'content-type': 'application/json', 
    'Authorization' : `Bearer ${tokenService.getToken()}`
  },
    body: JSON.stringify({msg})
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}