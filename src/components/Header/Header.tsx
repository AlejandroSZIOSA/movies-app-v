import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import SwitchDarkMode from "../SwitchDarkMode/SwitchDarkMode";
import styles from "./Header.module.css";

type Props = {
  subHeaderTitle: string;
  children?: React.ReactNode;
  afterSubHeader?: React.ReactNode;
};

const Header: React.FC<Props> = ({
  subHeaderTitle,
  children,
  afterSubHeader,
}) => {
  return (
    <header>
      <div className={styles.innerContainer}>
        <div className={styles.titleAppContainer}>
          <h1>Movies-app</h1>
          <SwitchDarkMode />
        </div>
        {children}
      </div>
      <SubHeader title={subHeaderTitle} />
      {afterSubHeader}
    </header>
  );
};
export default Header;
