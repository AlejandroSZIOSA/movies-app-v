import React, { useEffect } from "react";
import { useGetActorsAndGenresInMovie } from "../../hooks/useGetActorsAndGenresInMovie";
import { useSearchParams } from "react-router-dom";
import PaginationPanel from "../PaginationPanel/PaginationPanel";
import AsyncStateOperations from "./../AsyncStateOperations/AsyncStateOperations";
import Portal from "../Portal/Portal";
import Card from "../Card/Card";
import styles from "./MoviesByGenreList.module.css";

type Props = {
  genreId: string;
};

const MoviesByGenreList: React.FC<Props> = ({ genreId }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genreFromUrl = searchParams.get("genre") || "";
  const currentPageFromUrl = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (genreId && genreId !== genreFromUrl) {
      setSearchParams({ genre: genreId, page: "1" }, { replace: true });
    }
  }, [genreId, genreFromUrl, setSearchParams]);

  const {
    data: moviesByGenre,
    loading,
    error,
    totalPages,
  } = useGetActorsAndGenresInMovie(
    `discover/movie?with_genres=${genreId}&page=${currentPageFromUrl}`,
  );

  const updatePageInUrl = (newPage: number) => {
    setSearchParams(
      {
        genre: genreId,
        page: String(newPage),
      },
      { replace: true },
    );
  };

  return (
    <div className={styles.moviesByGenreListRootContainer}>
      <AsyncStateOperations
        loading={loading}
        error={error}
        spinnerPosition="center"
        data={moviesByGenre}
        emptyMessage="No movies found in this genre"
      >
        {(moviesByGenre) => (
          <>
            <ol>
              {moviesByGenre.map((m) => (
                <li key={m.id}>
                  <Card movie={m} variant="medium" />
                  <hr style={{ marginTop: "20px" }}></hr>
                </li>
              ))}
            </ol>
            <Portal containerId="root-shared-portal">
              <div className={styles.paginationPanelOuterContainer}>
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

export default React.memo(MoviesByGenreList);
