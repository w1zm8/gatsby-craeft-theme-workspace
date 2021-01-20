const fs = require("fs");
const { CONTENT_PATHS, CONTENT_REQUIRED_FILES } = require("./options");

// replace with "src/utils/getTagsFromPosts.ts"
const getTagsFromPosts = (posts) =>
  posts
    .map(
      ({
        node: {
          frontmatter: { tags },
        },
      }) => tags
    )
    .filter(Boolean)
    .flat();

const getTagsCount = (tags) =>
  tags.reduce((acc, tag) => ({ ...acc, [tag]: (acc[tag] || 0) + 1 }), {});

const createRequiredFiles = (path, reporter, requiredFiles = {}) => {
  const requiredFilesNames = Object.keys(requiredFiles);

  if (!requiredFilesNames.length) {
    return;
  }

  requiredFilesNames.forEach((fileName) => {
    const { ext, content } = requiredFiles[fileName];

    if (!ext || !content) {
      return;
    }

    const filePath = `${path}/${fileName}.${ext}`;

    if (fs.existsSync(filePath)) {
      return;
    }

    reporter.info(`creating the ${filePath} file`);
    fs.writeFileSync(filePath, content);
  });
};

const createNonExistentFolder = (path, reporter) => {
  if (!fs.existsSync(path)) {
    reporter.info(`creating the ${path} directory`);
    fs.mkdirSync(path, { recursive: true });
  }
};

const onPreBootstrap = ({ reporter }) => {
  createNonExistentFolder(
    CONTENT_PATHS.site,
    reporter,
    CONTENT_REQUIRED_FILES.site
  );
  createRequiredFiles(
    CONTENT_PATHS.site,
    reporter,
    CONTENT_REQUIRED_FILES.site
  );
  createNonExistentFolder(CONTENT_PATHS.posts, reporter);
};

const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const templates = {
    postPage: `${__dirname}/src/templates/post-page.tsx`,
    tagsPage: `${__dirname}/src/templates/tags-page.tsx`,
    tagPostsPage: `${__dirname}/src/templates/tag-posts-page.tsx`,
  };

  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/content/blog/" } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: templates.postPage,
      context: { id: node.id },
    });
  });

  const allTags = getTagsFromPosts(posts);
  const tagPostsCount = getTagsCount(allTags);
  const tags = Array.from(new Set(allTags).values());

  createPage({
    path: "/tags",
    component: templates.tagsPage,
    context: {
      tags,
      tagPostsCount,
    },
  });

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag}`,
      component: templates.tagPostsPage,
      context: {
        tag,
      },
    });
  });
};

module.exports = {
  onPreBootstrap,
  createPages,
};
