import { API_URL } from '@/constants/router';
import { MovieType } from '@/types/data';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
   baseURL: 'http://localhost:4000',
});

function fetchMoviesList(): Promise<AxiosResponse<MovieType[]>> {
   return instance.get(`${API_URL.PRODUCTS}`);
}

function fetchMovieDetail({ id }: {id: number | string | string[] | undefined}): Promise<AxiosResponse<MovieType>> {
   return instance.get(`${API_URL.PRODUCTS}/${id}`);
}
 
export { fetchMoviesList, fetchMovieDetail };