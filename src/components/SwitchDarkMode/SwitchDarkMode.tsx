import React from "react";
import styles from "./SwitchDarkMode.module.css";
import { useThemeCtx } from "../../hooks/useThemeCtx";

const SwitchDarkMode: React.FC = () => {
  const { theme_, toggleTheme_Fn } = useThemeCtx();

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme_ === "dark"}
        onChange={toggleTheme_Fn}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
export default SwitchDarkMode;
