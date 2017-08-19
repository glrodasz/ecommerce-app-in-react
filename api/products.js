import axios from 'axios';
import { API_URL } from '../config';

export const list = () => {
  return axios.get(`${API_URL}/products`);
}

export const create = (product) => {
  return axios.post(`${API_URL}/products`, product);
}
