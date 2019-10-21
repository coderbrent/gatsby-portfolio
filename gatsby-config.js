module.exports = {
  siteMetadata: {
    title: `Brent Abruzese`,
    description: `My professional portfolio and blogging engine built powered by GatsbyJS!`,
    author: `@brenta1283`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    'gatsby-plugin-catch-links',
    { 
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
        path: `${__dirname}/src/data`,
        name: `data`
        }
      },
      'gatsby-transformer-remark',
      'gatsby-transformer-json',
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /Icons/
          }
        }
      },
      'gatsby-plugin-sass'
  ],
}
