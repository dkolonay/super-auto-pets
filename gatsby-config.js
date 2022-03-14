module.exports = {
  siteMetadata: {
      title: `super-auto-pets`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
     {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon-round.png"
    }
  }]
};