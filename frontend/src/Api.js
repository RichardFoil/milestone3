import axios from 'axios';

export function searchBreweriesByZip(zipcode) {
  return axios
    .get(`https://api.openbrewerydb.org/breweries?by_postal=${zipcode}&per_page=5`)
    .then(response => {
      return response.data;
    });
}

   
