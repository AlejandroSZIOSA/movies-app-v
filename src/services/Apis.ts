import axios from "axios";

import type {
  GenreType,
  TMDBMovieResultsType,
  TMDBMoviesData,
  TMDBActorDataType,
  TMDBDiscoverData,
  TMDBMovieCreditsData,
} from "./Apis.types";

const API_KEY = import.meta.env.VITE_API_KEY;
export const API_BASE_URL = "https://api.themoviedb.org/3";
export const API_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const INSTANCE_BASE = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
  timeout: 10000,
});

const GET = async <T>(endpoint: string): Promise<T> => {
  const res = await INSTANCE_BASE.get<T>(endpoint, {
    params: { api_key: API_KEY },
  });
  return res.data;
};

export const getMoviesData = async (
  param: string,
): Promise<TMDBMoviesData<TMDBMovieResultsType> | TMDBMovieCreditsData> => {
  return GET(param);
};

export const getMovieDetails = async (
  id: string,
): Promise<TMDBMovieResultsType | TMDBActorDataType> => {
  return GET(id);
};

export const getActors = async (id: string): Promise<TMDBMovieCreditsData> => {
  return GET(id);
};

export const getAllGenres = async (): Promise<{
  genres: GenreType[];
}> => {
  return GET("/genre/movie/list");
};

export const getDiscoverData = async (
  id: string,
): Promise<TMDBDiscoverData> => {
  return GET(id);
};

export const getMovieByQueryParams = async (
  query: string,
): Promise<TMDBMoviesData<TMDBMovieResultsType>> => {
  return GET(query);
};
