import React from "react";

import { PostCard } from "./PostCard";

import { GridViewValue, PostEdge } from "../types";
import { getMappedPosts } from "../utils";

import styles from "../../styles/posts-list.module.css";

interface PostsListProps {
  posts: PostEdge[];
  gridView: GridViewValue;
}

export const PostsList = ({ posts: postsEdges, gridView }: PostsListProps) => {
  const posts = getMappedPosts(postsEdges);

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          {...post}
          to={`/blog/${post.slug}`}
          view={gridView}
        />
      ))}
    </div>
  );
};
