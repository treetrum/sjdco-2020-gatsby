/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /smooth-scroll/,
                        use: loaders.null()
                    }
                ]
            }
        });
    }
};

// Creates dummy pages for each project that just loads the home page
// bit of a hack - but it works
exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
        {
            allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
                edges {
                    node {
                        childMarkdownRemark {
                            frontmatter {
                                slug
                            }
                        }
                    }
                }
            }
        }
    `);
    result.data.allFile.edges.forEach(({ node }) => {
        const { slug } = node.childMarkdownRemark.frontmatter;
        actions.createPage({
            path: `project/${slug}`,
            component: path.resolve("./src/pages/index.tsx"),
            context: {}
        });
    });
};
