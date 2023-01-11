import axios from 'axios';

export const searchBreweriesByZip = async (zipcode) => {
  try {
    const response = await axios.get(`https://api.openbrewerydb.org/breweries/by_postal?postal_code=${zipcode}=per_page=5`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
