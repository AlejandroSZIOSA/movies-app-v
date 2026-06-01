import React from "react";
import styles from "./CustomButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "back" | "previous" | "next";
};

const CustomButton: React.FC<Props> = ({ variant, children, ...rest }) => {
  const labelMap = {
    back: "Back",
    previous: "Previous",
    next: "Next",
  };
  return (
    <button
      className={`${styles.customButtonRootContainer} ${styles[variant]}`}
      {...rest}
    >
      {children ?? labelMap[variant]}
    </button>
  );
};
export default CustomButton;
