import React from "react";

import { PostTag } from "./PostTag";

import styles from "../../styles/post-tags.module.css";

interface PostTagsProps {
  tags: string[];
  direction?: "row" | "column";
  maxCount?: number;
  id?: string;
}

export const PostTags = ({
  tags,
  id = "",
  direction = "row",
  maxCount = tags.length,
}: PostTagsProps) => {
  if (!tags.length) {
    return null;
  }

  const displayedTags = tags.slice(0, maxCount);

  return (
    <div className={styles[direction]}>
      {displayedTags.map((tag) => (
        <div className={styles.tag} key={`${id}-${tag}`}>
          <PostTag to={`/tags/${tag}`} color="orange">
            {tag}
          </PostTag>
        </div>
      ))}
    </div>
  );
};
