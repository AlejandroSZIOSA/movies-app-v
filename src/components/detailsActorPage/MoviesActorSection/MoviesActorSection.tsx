import React from "react";
import { Link } from "react-router-dom";
import { useGetActorsAndGenresInMovie } from "../../../hooks/useGetActorsAndGenresInMovie";
import AsyncStateOperations from "./../../AsyncStateOperations/AsyncStateOperations";
import styles from "./MoviesActorSection.module.css";

type Props = {
  id: string;
};

const MoviesActorSection: React.FC<Props> = ({ id }) => {
  const {
    data: movies,
    loading,
    error,
  } = useGetActorsAndGenresInMovie("discover/movie?with_cast=" + id);

  return (
    <section className={styles.moviesActorSectionRootContainer}>
      <h3>Movies acted in</h3>
      <AsyncStateOperations
        loading={loading}
        error={error}
        spinnerPosition="default"
        data={movies}
        emptyMessage="No movies found for this actor."
      >
        {(movies) => (
          <ol>
            {movies.map((m) => (
              <li key={m.id}>
                <Link to={`/movie/${m.id}`}>{m.title}</Link>
              </li>
            ))}
          </ol>
        )}
      </AsyncStateOperations>
    </section>
  );
};
export default MoviesActorSection;
