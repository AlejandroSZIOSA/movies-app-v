import React from "react";
import type {
  TMDBMovieResultsType,
  TMDBDiscoverResultsType,
} from "../../services/Apis.types";
import { API_IMAGE_BASE_URL } from "../../services/Apis";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

type Props = {
  movie: TMDBMovieResultsType | TMDBDiscoverResultsType;
  variant: "small" | "medium";
};

const Card: React.FC<Props> = ({ movie, variant = "small" }) => {
  const { poster_path, id } = movie;
  return (
    <div className={styles.cardRootContainer}>
      {movie && (
        <Link to={`/movie/${id}`}>
          {poster_path ? (
            <img
              src={API_IMAGE_BASE_URL + poster_path}
              className={styles[variant]}
              alt={movie.title}
            />
          ) : (
            <div className={`${styles.noImageContainer} ${styles[variant]}`}>
              <p>No Movie imagen</p>
            </div>
          )}
        </Link>
      )}
      <p>
        <strong>{movie.title}</strong>
      </p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default Card;
