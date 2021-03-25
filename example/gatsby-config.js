require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    logoTitle: "gatsby-novemist-theme",
    title: "gatsby-novemist-theme 🦉",
    titleTemplate: "%s | gatsby-novemist-theme 🦉",
    description:
      "Elit dolore enim exercitation aliquip commodo ex sit do aliquip incididunt adipisicing velit amet.",
    keywords: ["programming", "software development", "grokking"],
    siteUrl: process.env.SITE_URL,
    image: "images/default-image.png",
    twitterUsername: "mxkwl",
    githubUsername: "mxkvl",
    nav: [
      { path: "/", name: "Home" },
      { path: "/blog", name: "Blog" },
      { path: "/notes/home", name: "Notes" },
      { path: "/about", name: "About" },
    ],
    copyright: "© mxkvl 2021",
    footerNav: [
      { path: "/blog", name: "Blog" },
      { path: "/about", name: "About" },
      { path: "https://twitter.com/mxkwl", name: "Twitter" },
      { path: "https://github.com/mxkvl", name: "GitHub" },
    ],
    avatarSrc: "./static/images/avatar.jpg",
    socials: [
      {
        name: "Twitter",
        url: "https://twitter.com/intent/follow?screen_name=mxkwl",
        icon: "twitter",
      },
      {
        name: "GitHub",
        url: "https://github.com/mxkvl",
        icon: "github",
      },
      {
        name: "Patreon",
        url: "https://www.patreon.com/mxkvl",
        icon: "patreon",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-novemist-theme`,
        short_name: `gatsby-novemist-theme`,
        start_url: `/`,
        icon: "./static/images/favicon.png",
        display: `standalone`,
      },
    },
    "gatsby-plugin-ts-config",
    "gatsby-plugin-robots-txt",
    "@mxkvl/gatsby-novemist-theme",
  ],
};
