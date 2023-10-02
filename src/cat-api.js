import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_HH8i4cjyd52NMfrMkkcRWJv23rbltempbYZa9pWrjGheRyXeeNfWxgktdNgfymo9';
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error(error.status);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error(error.status);
    });
}
