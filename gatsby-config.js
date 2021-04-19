module.exports = {
    siteMetadata: {
        title: "Portfolio",
        author: "Elise Hoovler",
        description: "projects"
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
                name: "portfolio",
                short_name: "portfolio",
                start_url: "/",
                ackground_color: '#663399',
                theme_color: '#663399',
                display: "minimal-ui",
                icon: "src/images/one.png",
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-offline`
    ],
}