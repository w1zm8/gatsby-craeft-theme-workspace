import { graphql, PageProps } from "gatsby";
import React from "react";
import { FluidObject } from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import MainLayout from "./MainLayout";
import { PostInfo } from "./PostInfo";
import { PostTags } from "./PostTags";
import { TextContent } from "./TextContent";
import { useTheme } from "../core";

interface DataType {
  mdx: {
    frontmatter: {
      date: string;
      image: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
      title: string;
    };
    body: string;
  };
}

const PostLayout = ({
  data: {
    mdx: { frontmatter, body },
  },
}: PageProps<DataType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <article>
        <TextContent
          theme={theme}
          image={frontmatter.image.childImageSharp.fluid}
        >
          <PostTags
            tags={["javascript", "typescript", "react", "gatsby", "graphql"]}
          />
          <PostInfo
            author={{
              to: "/about",
              name: "@w1zm8",
            }}
            date={frontmatter.date}
            commentsCount={5}
          />
          <h1>{frontmatter.title}</h1>
          {body && <MDXRenderer>{body}</MDXRenderer>}
        </TextContent>
      </article>
    </MainLayout>
  );
};

export const query = graphql`
  query PostPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;

export default PostLayout;
