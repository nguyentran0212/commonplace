const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://commonplace.nk-tran.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/logos/logo-200.png',
    logoLink: 'https://commonplace.nk-tran.com',
    title:
      "",
    githubUrl: 'https://github.com/nguyentran0212/commonplace',
    helpUrl: '',
    tweetText: '',
    social: "",
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/habits',
      '/ideas',
      '/strategy'
    ],
    collapsedNav: [
      '/background', // add trailing slash if enabled above
      '/habits',
      '/ideas',
      '/strategy',
      '/technology-list',
      '/technology-tutorial',
    ],
    links: [{ text: '', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'Commonplace Book | NK Tran',
    description: 'Commonplace book of Nguyen Khoi Tran ',
    ogImage: null,
    docsLocation: 'https://github.com/nguyentran0212/commonplace/tree/master/content',
    favicon: '/logos/logo-200.png',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Commonplace Book of NK Tran',
      short_name: 'Commonplace',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/logo-200.png',
          sizes: `200x200`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
