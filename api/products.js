import axios from 'axios';
import config from '../config';

export const list = () => {
  return axios.get(`${config.API_URL}/products`);
}

export const create = (product) => {
  return axios.post(`${config.API_URL}/products`, product);
}
