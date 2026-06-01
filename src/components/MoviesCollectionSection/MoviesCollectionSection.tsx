import React from "react";
import Card from "../Card/Card";
import type { TMDBMovieResultsType } from "../../services/Apis.types";
import { useGetMoviesAndCredits } from "../../hooks/useGetMoviesAndCredits";
import AsyncStateOperations from "../AsyncStateOperations/AsyncStateOperations";
import styles from "./MoviesCollectionSection.module.css";

type Props = {
  title: string;
  url: string;
};

const MoviesCollectionSection: React.FC<Props> = ({ title, url }) => {
  const {
    data: moviesCollection,
    loading,
    error,
  } = useGetMoviesAndCredits<TMDBMovieResultsType>(url);

  return (
    <section className={styles.rootContainer}>
      <h4>{title}</h4>
      <AsyncStateOperations
        loading={loading}
        error={error}
        spinnerPosition="default"
        data={moviesCollection}
        emptyMessage="No actors found"
      >
        {(moviesCollection) => (
          <>
            <ol className={styles.collectionList}>
              {moviesCollection.map((m) => (
                <li key={m.id}>
                  <Card variant="small" movie={m} />
                </li>
              ))}
            </ol>
            <hr></hr>
          </>
        )}
      </AsyncStateOperations>
    </section>
  );
};

export default MoviesCollectionSection;
