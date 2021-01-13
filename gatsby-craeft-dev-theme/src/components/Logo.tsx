import { Link } from "gatsby";
import React from "react";

import { ThemeValue } from "../types";
import { THEMES } from "../constants";

import styles from "../../styles/logo.module.css";

interface LogoProps {
  theme?: ThemeValue;
}

export const Logo = ({ theme = THEMES.light }: LogoProps) => {
  return (
    <Link to="/" className={styles[theme]}>
      <span>craeft</span>
      <span className={styles.level}>.dev</span>
    </Link>
  );
};
