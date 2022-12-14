import { City, ListResponse } from 'models';
import axiosClient from './axiosClient';

const cityApi = {
  getAllCities(): Promise<ListResponse<City>> {
    const url = '/cities';
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 50,
      },
    });
  },
};

export default cityApi;
