import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { useTheme } from "../core";
import { Container } from "./Container";

import { InfoCard } from "./InfoCard";
import { Subscribing } from "./Subscribing";

import { StyleModules } from "../style-modules";
import { FullWidthWrapper } from "./FullWidthWrapper";

const styles = StyleModules.aboutBlock;

interface DataType {
  mdx: {
    body: string;
  };
}

interface AboutBlockProps {
  isColorishBg?: boolean;
}

export const AboutBlock: FC<AboutBlockProps> = ({ isColorishBg = false }) => {
  const { mdx } = useStaticQuery<DataType>(query);
  const { theme } = useTheme();

  return (
    <FullWidthWrapper isColorish={isColorishBg}>
      <Container>
        <div className={styles.inner}>
          <InfoCard style={{ width: "70%", marginRight: "10px" }} theme={theme}>
            <h2 className="monospace bold">About 💾</h2>
            {mdx ? <MDXRenderer>{mdx.body}</MDXRenderer> : null}
          </InfoCard>
          <Subscribing
            style={{ width: "30%", marginLeft: "10px" }}
            theme={theme}
          />
        </div>
      </Container>
    </FullWidthWrapper>
  );
};

const query = graphql`
  query AboutBlock {
    mdx(frontmatter: { key: { eq: "about-block" } }) {
      body
    }
  }
`;
