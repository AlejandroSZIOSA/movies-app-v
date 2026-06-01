import React from "react";
import { Link } from "react-router-dom";
import Messages from "../../Messages/Messages";
import styles from "./GenresSection.module.css";

type Props = {
  genres: {
    id: number;
    name: string;
  }[];
};

const GenresSection: React.FC<Props> = ({ genres }) => {
  return (
    <div className={styles.genresSectionRootContainer}>
      <h3>
        <strong>Genres</strong>
      </h3>
      {genres && genres.length > 0 ? (
        <ol>
          {genres.map((g) => (
            <li key={g.id}>
              <Link to={"/genre/" + g.id}>{g.name}</Link>
            </li>
          ))}
        </ol>
      ) : (
        <Messages>No genres found.</Messages>
      )}
    </div>
  );
};

export default GenresSection;
