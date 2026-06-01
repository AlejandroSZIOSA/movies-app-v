import React from "react";
import styles from "./PaginationPanel.module.css";
import CustomButton from "../CustomButton/CustomButton";

type Props = {
  totalPages: number;
  currentPage: number;
  updatePageInUrl: (newPage: number) => void;
};

const PaginationPanel: React.FC<Props> = ({
  currentPage,
  totalPages,
  updatePageInUrl,
}) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      updatePageInUrl(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      updatePageInUrl(currentPage - 1);
    }
  };

  return (
    <div className={styles.paginationPanelrootContainer}>
      <div className={styles.innerContainer}>
        <CustomButton
          variant="previous"
          onClick={handlePreviousPage}
          disabled={currentPage <= 1}
        />
        <span>
          {currentPage} / {totalPages}{" "}
        </span>

        <CustomButton
          variant="next"
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
};
export default PaginationPanel;
