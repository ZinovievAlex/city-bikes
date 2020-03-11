import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.citybik.es/v2/'
});

export const networkAPI = {
  getAllNetworks() {
    return instance.get(`networks/`)
  },
  getStations(id) {
    return instance.get(`networks/${id}`)
  }
}
