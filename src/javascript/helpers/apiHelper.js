const API_URL = 'http://localhost:3000/';

function callApi(endpoind, options) {
 console.log(options)
  const url = API_URL + endpoind;



  return fetch(url, options)
    .then(response =>
      response.ok ? response.json() : Promise.reject(Error('Failed to load'))
    )
    .catch(error => {
      throw error;
    });
}

export { callApi }