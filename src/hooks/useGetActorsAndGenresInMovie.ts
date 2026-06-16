import { useState, useEffect } from "react";
import * as APIs from "../services/Apis";
import type { TMDBDiscoverResultsType } from "../services/Apis.types";
import { getErrorMessage } from "../utils/helpFunctions";

export const useGetActorsAndGenresInMovie = (params: string) => {
  const [data, setData] = useState<TMDBDiscoverResultsType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await APIs.getDiscoverData(params);
        setData(resData.results);
        setTotalPages(resData.total_pages);
      } catch (error: unknown) {
        //fix:Removed error assertion
        setError(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  return { data, loading, error, totalPages };
};
