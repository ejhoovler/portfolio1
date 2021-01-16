'use strict';

const siteConfig = require('./gatsby-config.js');

module.exports = {
    siteMetadata: {
        url: siteConfig.url,
        title: siteConfig.title,
        copyright: siteConfig.copyright,
        menu: siteConfig.menu,
        author: siteConfig.author
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${ __dirname }/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Portfolio",
                short_name: "portfolio",
                start_url: "/",
                display: "minimal-ui",
                icon: "src/images/one.png",
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify`,
    ],
}