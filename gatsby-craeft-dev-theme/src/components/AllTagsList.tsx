import { Link } from "gatsby";
import React from "react";
import { ThemeValue } from "../types";

import styles from "../../styles/all-tags-list.module.css";

interface AllTagsListProps {
  tags: { [key: string]: number };
  theme: ThemeValue;
}

export const AllTagsList = ({ tags, theme }: AllTagsListProps) => {
  return (
    <nav className={styles[theme]}>
      {Object.keys(tags).map((tag) => (
        <Link to={`/tags/${tag}`}>
          {tag} ({tags[tag]}){" "}
        </Link>
      ))}
    </nav>
  );
};
