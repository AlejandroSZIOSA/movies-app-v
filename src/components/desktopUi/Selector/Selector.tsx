import React from "react";
import styles from "./Selector.module.css";

type Props = {
  genres: {
    id: number;
    name: string;
  }[];
  selectedGenre: string;
  onChange: (genreId: number) => void;
};

const Selector: React.FC<Props> = ({ genres, selectedGenre, onChange }) => {
  return (
    <select
      className={styles.selectorRoot}
      value={selectedGenre}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="">{selectedGenre}</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};
export default Selector;
