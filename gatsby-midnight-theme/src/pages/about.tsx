import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container, PostsListHeader } from "../components";
import { Breadcrumbs, MainLayout } from "../components";
import { TextContent } from "../components";
import { useTheme } from "../core";

interface DataType {
  mdx: {
    body: string;
  };
}

const AboutPage = ({ data }: PageProps<DataType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout title="About">
      <br />
      <Container>
        <Breadcrumbs items={[{ to: "/", label: "Home" }, { label: "About" }]} />
        <PostsListHeader title="About" theme={theme} />
        <TextContent theme={theme}>
          {data.mdx && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
        </TextContent>
      </Container>
    </MainLayout>
  );
};

export const query = graphql`
  query AboutPage {
    mdx(slug: { eq: "site-about" }) {
      body
    }
  }
`;

export default AboutPage;
