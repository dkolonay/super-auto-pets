module.exports = {
  siteMetadata: {
    title: `Super Auto Pets`,
    siteUrl: `https://adoring-hamilton-015d1c.netlify.app/`,
    description: `Play Super Auto Pets by the animal fans at Team Wood Games!`
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