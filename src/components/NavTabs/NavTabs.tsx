import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavTabs.module.css";

const NavTabs: React.FC = () => {
  return (
    <div className={styles.navTabsContainer}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/moviesByGenre">Genres</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  );
};
export default NavTabs;
