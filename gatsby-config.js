/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/README.md
       *
       */
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        presets: null,
        schema: {
          perPage: 100,
          timeout: 60000,
        },
        url: 'https://temp.rasmuswoelk.dk/wordpress/graphql',
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
          hardCacheData: true,
        },
        html: {
          useGatsbyImage: false,
          imageQuality: 80,
          imageMaxWidth: 1400,
          fallbackImageMaxWidth: 1400,
          createStaticFiles: false,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: false,
            showQueryVarsOnError: true,
            panicOnError: false,
          },
        },
        type: {
          Comment: {
            exclude: true,
          },
          Resource: {
            limit: 20
          },
          Review: {
            limit: 20
          },
          Post: {
            limit: 20
          },
          MediaItem: {
            localFile: {
              excludeByMimeTypes: [`audio/mpeg`],
            },
          },
        },
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
  ],
}
