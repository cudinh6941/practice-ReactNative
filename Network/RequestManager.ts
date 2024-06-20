import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 60000,
});

const setAuthorizationHeader = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};

const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
    try {
      // Thiết lập header Content-Type là application/json
      config.headers = {
        ...config.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
  
      const response: AxiosResponse<T> = await instance(config);
      console.log(`RESPONSE: PATH: ${response.config.url} \n STATUS CODE: ${response.status}`);
      return response.data;
    } catch (error: any) {
      console.error(`Error: ${error}`);
      throw error.response ? error.response.data : error;
    }
  };

  

export default {
  setAuthorizationHeader,
  request,
};
