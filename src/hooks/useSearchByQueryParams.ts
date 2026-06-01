import { useState, useEffect } from "react";
import * as APIs from "../services/Apis";
import type { TMDBMovieResultsType } from "../services/Apis.types";

export const useSearchByQueryParams = (params: string) => {
  const [data, setData] = useState<TMDBMovieResultsType[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await APIs.getMovieByQueryParams(params);
        setData(resData.results);
        setTotalPages(resData.total_pages);
      } catch (error: unknown) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  return { data, loading, error, totalPages };
};
