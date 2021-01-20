import { graphql, PageProps } from "gatsby";
import React from "react";

import {
  Breadcrumbs,
  MainLayout,
  PageGrid,
  PostsList,
  PostsListHeader,
  SidePanel,
} from "../components";
import { useTheme } from "../core";
import { PostEdge } from "../types";

interface DataType {
  allMdx: {
    edges: PostEdge[];
    totalCount: number;
  };
}

interface PageContextValue {
  tag: string;
}

const TagPostsPage = ({
  data: { allMdx },
  pageContext: { tag },
}: PageProps<DataType, PageContextValue>) => {
  const { theme } = useTheme();

  return (
    <MainLayout title="Tags">
      <Breadcrumbs
        items={[
          { to: "/", label: "Home" },
          { to: "/tags", label: "Tags" },
          { label: tag },
        ]}
      />
      <PostsListHeader title={`#${tag}`} theme={theme} />
      <PageGrid>
        <div style={{ width: "100%" }}>
          <PostsList posts={allMdx.edges} gridView="tile" />
        </div>
      </PageGrid>
    </MainLayout>
  );
};

export const query = graphql`
  query TagPostsPage($tag: String!) {
    allMdx(
      limit: 6
      filter: { frontmatter: { hidden: { ne: true }, tags: { in: [$tag] } } }
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

export default TagPostsPage;
