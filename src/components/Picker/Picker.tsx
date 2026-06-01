import React, { useState } from "react";
import styles from "./Picker.module.css";
import Portal from "../Portal/Portal";

type Props = {
  genres: {
    id: number;
    name: string;
  }[];
  selectedGenre: string;
  onChange: (genreId: number) => void;
};

const Picker: React.FC<Props> = ({ genres, onChange, selectedGenre }) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={styles.rootContainer}>
      <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        {selectedGenre}
      </button>
      {isOpen && (
        <Portal containerId="root-shared-portal">
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
              {genres.map((genre) => (
                <button
                  className={styles.genreButton}
                  key={genre.id}
                  onClick={() => {
                    onChange(genre.id);
                    setIsOpen(false);
                  }}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Picker;
