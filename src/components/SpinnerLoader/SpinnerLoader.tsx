import React from "react";
import styles from "./SpinnerLoader.module.css";

type Props = {
  spinnerPosition: "center" | "default";
};

const SpinnerLoader: React.FC<Props> = ({ spinnerPosition }) => {
  return (
    <div
      className={`${styles.spinnerContainer} ${styles[spinnerPosition]}`}
    ></div>
  );
};
export default SpinnerLoader;
