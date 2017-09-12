module.exports = {
    siteMetadata: {
        title: `GregRafferty.com`,
    },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-plugin-glamor`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
    ],
}