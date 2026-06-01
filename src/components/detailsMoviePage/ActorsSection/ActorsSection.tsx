import React from "react";
import { type TMDBMovieCastMemberType } from "../../../services/Apis.types";
import { useGetMoviesAndCredits } from "../../../hooks/useGetMoviesAndCredits";
import { Link } from "react-router-dom";
import AsyncStateOperations from "../../AsyncStateOperations/AsyncStateOperations";
import styles from "./ActorsSection.module.css";

type Props = {
  id: string;
};

const ActorsSection: React.FC<Props> = ({ id }) => {
  const {
    data: actors,
    loading,
    error,
  } = useGetMoviesAndCredits<TMDBMovieCastMemberType>(`/movie/${id}/credits`);

  return (
    <section className={styles.actorsSectionRootContainer}>
      <h3>Actors</h3>
      <AsyncStateOperations
        loading={loading}
        spinnerPosition="default"
        error={error}
        data={actors}
        emptyMessage="No actors found"
      >
        {(actors) => (
          <ol>
            {actors.map((a) => (
              <li key={a.id}>
                <Link to={`/actor/${a.id}`}>{a.name}</Link>
              </li>
            ))}
          </ol>
        )}
      </AsyncStateOperations>
    </section>
  );
};
export default ActorsSection;
