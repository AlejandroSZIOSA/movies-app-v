import { useLayoutEffect, useState } from "react";
import * as APIs from "../services/Apis";
import type { GenreType } from "../services/Apis.types";

export const useGetAllGenres = () => {
  const [data, setData] = useState<GenreType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await APIs.getAllGenres();
        const newGenres = [{ id: 1, name: "All" }, ...resData.genres];
        setData(newGenres);
      } catch (error: unknown) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
