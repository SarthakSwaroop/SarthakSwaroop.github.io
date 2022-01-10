const meta = {
  // Metadata
  siteTitle: 'Anurag Hazra - Creative Web Designer',
  siteDescription:
    'Anurag Hazra - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Anurag Hazra',
  siteShortName: 'Anurag Hazra',
  siteUrl: 'https://anuraghazra.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'anuraghazra',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#926df2',
  backgroundColor: '#926df2',
};

module.exports = website;
