module.exports = {
  siteMetadata: {
    title: "Giovanni Ferrara CV",
    titleTemplate: "",
    description: "I'm the Software Engineer to whom you would leave the keys of your flat",
    author: "Giovanni Ferrara"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `cv`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Giovanni Ferrara CV`,
        short_name: `GF`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `content/personal-info/me.png`,
      },
    },
  ],
}
