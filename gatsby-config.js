require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Отделение программирования - ДПК`,
    description: `Отделение программирования ДПК: новости, события, документы`,
    author: `@holub-alexander`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/content`,
        ignore: [`${__dirname}/content/gallery`, `**/gallery`],
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
        icon: `src/assets/images/favicon.png`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-theme-gallery`,
      options: {
        basePath: `/gallery-test`,
        path: `${__dirname}/content/gallery`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
};
