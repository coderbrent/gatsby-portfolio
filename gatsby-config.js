module.exports = {
  siteMetadata: {
    title: `Brent Abruzese`,
    description: `My developer portfolio built with Gatsby!`,
    author: `@brenta1283`,
    social: {
      twitter: 'https://twitter.com/BrentA1283',
      github: 'https://github.com/coderbrent',
      email: 'mailto:brent.abruzese@gmail.com',
      stackoverflow: 'https://stackoverflow.com/users/10956869/brent-abruzese',
      linkedin: 'https://linkedin.com/in/brent-abruzese',
      resume: 'https://drive.google.com/file/d/12dRE2KQAkcbKs54FmTmKg5tLvc7MUteC/view?usp=sharing',
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
      `gatsby-remark-prismjs`,
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
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
            `gatsby-remark-external-links`,
          ],
        },
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
