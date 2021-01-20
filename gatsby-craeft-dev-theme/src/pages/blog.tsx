import React from "react";
import { PageProps, graphql } from "gatsby";

import {
  PageGrid,
  MainLayout,
  PostsList,
  PostsSection,
  PostsListHeader,
  Breadcrumbs,
} from "../components";
import { PostEdge } from "../types";
import { useTheme } from "../core";
import { getMappedPosts, getTagsFromPosts } from "../utils";

interface DataType {
  mdx: {
    body: string;
  };
  allMdx: {
    edges: PostEdge[];
    totalCount: number;
  };
}

const BlogPage = ({ data: { allMdx, mdx } }: PageProps<DataType>) => {
  const { theme } = useTheme();

  const tags = getTagsFromPosts(allMdx.edges);

  return (
    <MainLayout title="Blog">
      <Breadcrumbs items={[{ to: "/", label: "Home" }, { label: "Blog" }]} />
      <PostsListHeader
        title="Blog"
        theme={theme}
        style={{
          width: "100%",
        }}
      />
      <PageGrid>
        <PostsSection style={{ width: "100%" }}>
          <PostsList posts={allMdx.edges} gridView="tile" />
        </PostsSection>
        {/* <SidePanel>
          <InfoCard theme={theme}>
            {mdx ? <MDXRenderer>{mdx.body}</MDXRenderer> : null}
          </InfoCard>
          <TagsBlock theme={theme} tags={tags} />
        </SidePanel> */}
      </PageGrid>
    </MainLayout>
  );
};

export const query = graphql`
  query BlogPage {
    mdx(frontmatter: { key: { eq: "short-about" } }) {
      body
    }
    allMdx(
      limit: 6
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { hidden: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }
`;

export default BlogPage;
