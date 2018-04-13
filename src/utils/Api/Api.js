import axios from 'axios';
import { isArray, isObject, isString } from 'lodash';

export default class Api {
  constructor(options) {
    options.headers = options.headers || {};
    const headers = { ...this.generateHeader(), ...options.headers };
    this.axiosInstance = axios.create({
      headers,
      baseURL: options.baseURL || '',
    });

    this.axiosInstance.defaults.timeout = 30000;

    this.authenticators = options.authenticators || [];
    // this._token = {};
  }

  // async token() {
  //   try {
  //     await this.authenticate();
  //   } catch (e) {
  //     throw new Error(`Token retrieve error: ${e}`);
  //   }
  //
  //   return this._token;
  // }

  async get(url) {
    // await this.authenticate();
    const response = await this.axiosInstance.get(url);
    return response.data;
  }

  async request(config) {
    // await this.authenticate();
    const response = await this.axiosInstance.request(config);
    return response.data;
  }

  async put(url, params) {
    const response = await this.axiosInstance.put(url, params);
    return response.data;
  }

  async post(url, params) {
    const response = await this.axiosInstance.post(url, params);
    return response.data;
  }

  generateHeader() {
    return {
      common: {
        'Content-Type': 'application/json',
      },
    };
  }

  updateHeaders(headers) {
    if (isArray(headers)) {
      headers.map(this.setHeader);
    } else if (isObject(headers)) {
      this.setHeader(headers);
    } else {
      throw new Error('The parameter can be an Array of objects or an object with two properties, "key" and "value". e.g. {key: "Authorization", value: "Bearer ..."}');
    }
  }

  setHeader({ key, value }) {
    this.axiosInstance.defaults.headers.common[key] = value;
  }

  isHeaderValid({ key, value }) {
    return isString(key) && isString(value);
  }
}
