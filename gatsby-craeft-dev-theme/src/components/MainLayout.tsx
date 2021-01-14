import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SEO } from "./Seo";

import { useTheme } from "../core";

import "../../styles/main.css";
import { NavItem } from "../types";

const query = graphql`
  query MainLayout {
    site {
      siteMetadata {
        logoTitle
        copyright
        nav {
          path
          name
        }
        footerNav {
          path
          name
        }
      }
    }
  }
`;

interface MainLayoutQuery {
  site: {
    siteMetadata: {
      logoTitle: string;
      copyright: string;
      nav: NavItem[];
      footerNav: NavItem[];
    };
  };
}

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { theme } = useTheme();
  const {
    site: { siteMetadata },
  } = useStaticQuery<MainLayoutQuery>(query);

  return (
    <>
      <SEO theme={theme} />
      <Header logoTitle={siteMetadata.logoTitle} navItems={siteMetadata.nav} />
      <main className="container">
        <br />
        <br />
        <section>
          <MDXProvider components={{}}>{children}</MDXProvider>
        </section>
      </main>
      <Footer
        copyright={siteMetadata.copyright}
        navItems={siteMetadata.footerNav}
        theme={theme}
      />
    </>
  );
};

export default MainLayout;
