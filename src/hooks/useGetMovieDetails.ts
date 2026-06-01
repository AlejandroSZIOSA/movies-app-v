//Note:Geting Movie and Actor details
import { useState, useEffect } from "react";
import * as APIs from "../services/Apis";
import type {
  TMDBMovieResultsType,
  TMDBActorDataType,
} from "../services/Apis.types";

export const useGetMovieDetails = <
  T extends TMDBMovieResultsType | TMDBActorDataType,
>(
  params: string,
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await APIs.getMovieDetails(params);
        setData(resData as T);
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
