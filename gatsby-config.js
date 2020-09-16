module.exports = {
  siteMetadata: {
    title: `Brent Abruzese`,
    description: `My developer portfolio built on Gatsby!`,
    author: `@brenta1283`,
    social: {
      twitter: 'https://twitter.com/BrentA1283',
      github: 'https://github.com/coderbrent',
      email: 'mailto:brent.abruzese@gmail.com',
      stackoverflow: 'https://stackoverflow.com/users/10956869/brent-abruzese',
      linkedin: 'https://linkedin.com/in/brent-abruzese',
      resume: '',
    }
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/Icons/rsz_brentphoto.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-catch-links',
    { 
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
        }
      },
      'gatsby-transformer-remark',
      'gatsby-transformer-json', {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/content`,
          name: `data`,
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /Icons/
          }
        }
      },
      'gatsby-plugin-sass',
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: `UA-156186170-2`
        }
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `${__dirname}/src/utils/typography`
        }
      },
      `gatsby-plugin-emotion`,
  ],
}
