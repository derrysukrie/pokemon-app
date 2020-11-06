/* eslint-disable no-prototype-builtins */
import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  validateStatus(status) {
    return status < 500;
  },
});

function GET(endpoint, param) {
  let url = endpoint;
  url = `${url}/${param}`;
  return api.get(url);
}

function GETPAGINATION(endpoint, offset) {
  let url = endpoint;
  url = `${url}?limit=20&offset=${offset}`;
  return api.get(url);
}

export { api, GET, GETPAGINATION };
