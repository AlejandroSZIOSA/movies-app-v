import React from "react";
import styles from "./SubHeader.module.css";

type Props = {
  title: string;
};

const SubHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.subHeaderRootContainer}>
      <h2>{title}</h2>
    </div>
  );
};
export default SubHeader;
