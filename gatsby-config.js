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
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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
        `gatsby-plugin-typescript`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sass`
    ]
};
