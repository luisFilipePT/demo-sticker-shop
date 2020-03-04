module.exports = {
  siteMetadata: {
    title: `Sticker Shop`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    name: "Your blog title",
    keywords: ["tech", "blog", "boop"],
    siteUrl: 'https://gatsby-theme-terminal.netlify.com',
    siteImage: 'name-of-open-graph-image.jpg', // pop an image in the static folder to use it as the og:image,
    profileImage: 'name-of-profile-image.jpg',
    lang: `eng`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `@pauliescanlon/gatsby-theme-terminal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
