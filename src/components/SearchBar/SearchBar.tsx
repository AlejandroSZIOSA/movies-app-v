import React, { useEffect } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  inputSearch: string;
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
};

const SearchBar: React.FC<Props> = ({
  inputSearch,
  setInputSearch,
  handleSearch,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.searchBarRootContainer}>
      <div className={styles.searchBarInputContainer}>
        <input
          type="text"
          placeholder="movie..."
          value={inputSearch}
          ref={inputRef}
          required
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <span>
          <button
            type="button"
            onClick={handleSearch}
            disabled={inputSearch.trim().length < 1}
          >
            🔎
          </button>
        </span>
      </div>
    </div>
  );
};
export default SearchBar;
