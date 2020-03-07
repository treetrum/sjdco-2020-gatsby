const title = `Sam Davis - Front End Developer`;
const short_title = "sjdco-2020";
const description = `Sam Davis - Sydney based frontend developer with over 6 years experience`;
const favicon = "src/images/favicon.png";
const theme_color = "#1d1e26";

module.exports = {
    siteMetadata: {
        title: title,
        description: description
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/content/pages`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: title,
                short_name: short_title,
                start_url: `/`,
                background_color: theme_color,
                theme_color: theme_color,
                display: `minimal-ui`,
                icon: favicon
            }
        },
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout.tsx`)
            }
        }
    ]
};
