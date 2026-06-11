//Note:Geting Movie and Actor details
import { useState, useEffect } from "react";
import * as APIs from "../services/Apis";
import type {
  TMDBMovieResultsType,
  TMDBActorDataType,
} from "../services/Apis.types";
import { getErrorMessage } from "../utils/helpFunctions";

export const useGetMovieDetails = (params: string) => {
  //fix:Removed generic type T parameter and added specific types for data state avoid type assertion in setData
  const [data, setData] = useState<
    TMDBMovieResultsType | TMDBActorDataType | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await APIs.getMovieDetails(params);
        setData(resData);
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
