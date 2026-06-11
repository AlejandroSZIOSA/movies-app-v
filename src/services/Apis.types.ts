export type GenreType = {
  id: number;
  name: string;
};

export interface TMDBMoviesData<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type TMDBMovieResultsType = {
  adult: boolean;
  backdrop_path: string | null;
  genres: GenreType[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // ISO date string
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMDBActorDataType = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string | null;
};

//Movie Credits actors data type
export interface TMDBMovieCreditsData {
  id: number;
  cast: TMDBMovieCastMemberType[];
}

export type TMDBMovieCastMemberType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type TMDBDiscoverResultsType = Omit<TMDBMovieResultsType, "genres"> & {
  genre_ids: number[];
};

export interface TMDBDiscoverData {
  page: number;
  results: TMDBDiscoverResultsType[];
  total_pages: number;
  total_results: number;
}
