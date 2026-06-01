import { useEffect, useState } from "react";
import * as APIs from "../services/Apis";

import type {
  TMDBMovieResultsType,
  TMDBMovieCastMemberType,
} from "../services/Apis.types";

export const useGetMoviesAndCredits = <
  T extends TMDBMovieResultsType | TMDBMovieCastMemberType,
>(
  params: string,
) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await APIs.getMoviesData(params);
        if ("results" in resData) {
          setData(resData.results as T[]);
        } else {
          setData(resData.cast as T[]);
        }
      } catch (error: unknown) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  return { data, loading, error };
};
