import { useEffect, useState } from "react";
import * as APIs from "../services/Apis";

import type {
  TMDBMovieResultsType,
  TMDBMovieCastMemberType,
} from "../services/Apis.types";
import { getErrorMessage } from "../utils/helpFunctions";

export const useGetMoviesAndCredits = (params: string) => {
  //fix:Removed generic type T parameter and added specific types for data state avoid type assertion in setData
  const [data, setData] = useState<
    TMDBMovieResultsType[] | TMDBMovieCastMemberType[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await APIs.getMoviesData(params);
        if ("results" in resData) {
          setData(resData.results);
        } else {
          setData(resData.cast);
        }
      } catch (error: unknown) {
        //fix:Removed error assertion
        setError(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  return { data, loading, error };
};
