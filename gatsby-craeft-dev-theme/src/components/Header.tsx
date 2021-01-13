import React from "react";
import { useLocation } from "@reach/router";

import { Navbar } from "./Navbar";
import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "../core";

import headerStyles from "../../styles/header.module.css";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const navItems = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/blog",
      title: "Blog",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/contact",
      title: "Contact",
    },
  ];

  return (
    <header className={headerStyles[theme]}>
      <div className="container">
        <div className={headerStyles.inner}>
          <Logo theme={theme} />
          <div className={headerStyles.row}>
            <Navbar items={navItems} currentPath={pathname} theme={theme} />
            <ThemeSwitcher theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};
