const { CONTENT_NAMES, CONTENT_PATHS } = require("./options");

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: CONTENT_PATHS.images,
        name: CONTENT_NAMES.images,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: CONTENT_PATHS.posts,
        name: CONTENT_NAMES.posts,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: CONTENT_PATHS.site,
        name: CONTENT_NAMES.site,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
};
