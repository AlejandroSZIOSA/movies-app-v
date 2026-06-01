import React, { useEffect } from "react";
import { useSearchByQueryParams } from "../../hooks/useSearchByQueryParams";
import { useSearchParams } from "react-router-dom";
import PaginationPanel from "../PaginationPanel/PaginationPanel";
import Card from "../Card/Card";

import AsyncStateOperations from "./../AsyncStateOperations/AsyncStateOperations";
import Portal from "../Portal/Portal";

import styles from "./SearchResultsList.module.css";

type Props = {
  queryInput: string;
};

const SearchResultsList: React.FC<Props> = ({ queryInput }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const currentPageFromUrl = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (queryInput && queryInput !== query) {
      setSearchParams({ query: queryInput, page: "1" });
    }
  }, [queryInput, query, setSearchParams]);

  const {
    data: movies,
    loading,
    error,
    totalPages,
  } = useSearchByQueryParams(
    `/search/movie?query=${query}&page=${currentPageFromUrl}`,
  );

  const updatePageInUrl = (newPage: number) => {
    setSearchParams({
      query,
      page: String(newPage),
    });
  };

  return (
    <div className={styles.searchResultsListRootContainer}>
      <AsyncStateOperations
        loading={loading}
        error={error}
        spinnerPosition="center"
        data={movies}
        emptyMessage="No movies found."
      >
        {(movies) => (
          <>
            <ol className={styles.searchResultsList}>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <Card movie={movie} variant="medium" />
                  <hr style={{ marginTop: "20px" }}></hr>
                </li>
              ))}
            </ol>
            <Portal containerId="root-shared-portal">
              <div className={styles.paginationPanelShowMobile}>
                <PaginationPanel
                  currentPage={currentPageFromUrl}
                  totalPages={totalPages}
                  updatePageInUrl={updatePageInUrl}
                />
              </div>
            </Portal>
          </>
        )}
      </AsyncStateOperations>
    </div>
  );
};
export default React.memo(SearchResultsList);
