module.exports = {
    siteMetadata: {
        title: "Portfolio",
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
    ],
}