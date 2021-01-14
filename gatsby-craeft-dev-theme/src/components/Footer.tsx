import React from "react";

import { Link } from "gatsby";

import { NavItem, ThemeValue } from "../types";
import { THEMES } from "../constants";

import styles from "../../styles/footer.module.css";
import { Navbar } from "./Navbar";

interface FooterProps {
  theme?: ThemeValue;
  copyright: string;
  navItems: NavItem[];
}

export const Footer = ({
  theme = THEMES.light,
  copyright,
  navItems,
}: FooterProps) => {
  return (
    <footer className={styles[theme]}>
      <div className="container">
        <div className={styles.inner}>
          <section className="copyright">{copyright}</section>
          <Navbar items={navItems} theme={theme} />
          <section>
            <span>theme made by </span>
            <a className="underline theme-link" href="https://github.com/w1zm8">
              @w1zm8
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
};
