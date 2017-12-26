const META_DESCRIPTION = "I'm Bek Stone, an advisor, creative director, and maker and breaker of things.";

const LINT_ON_BUILD = false;

const PRELOAD_FONT_FILES = [
  'TiemposHeadlineWeb-Bold.woff2',
  'TiemposTextWeb-Regular.woff2',
  'TiemposTextWeb-RegularItalic.woff2',
];

function findLoader(config, name) {
  return config.module.rules.find(r => r.loader === name);
}

module.exports = {
  build: {
    extend(config, {dev, isClient}) {
      if (LINT_ON_BUILD && dev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      if (dev) {
        // Speed up builds.
        config.devtool = 'cheap-eval-source-map';
      }

      const vueLoader = findLoader(config, 'vue-loader');
      if (vueLoader) {
        vueLoader.options = vueLoader.options || {};
        vueLoader.options.cssModules = {
          localIdentName: '[local]_[hash:base64:5]',
          camelCase: true,
        };
      }

      // Remove svg from url-loader, in favor of vue-svg-loader.
      const urlLoader = findLoader(config, 'url-loader');
      if (urlLoader) {
        urlLoader.test = /\.(png|jpe?g|gif)$/;
      }

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              {cleanupIDs: false},
              {collapseGroups: false},
              {convertShapeToPath: false},
            ],
          },
        },
      });
    },

    vendor: [
      'animejs',
      'vue-marked',
    ],
  },

  css: [
    'normalize.css',
    {src: '~/assets/base.styl', lang: 'stylus'},
  ],

  generate: {
    minify: {
      // TODO: this is breaking SVG styling. see if there's a smaller hammer
      minifyCSS: false,
    },
  },

  head: {
    title: 'Bek Stone',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},

      {name: 'description', content: META_DESCRIPTION},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://bek.is/'},
      {property: 'og:image', content: 'https://bek.is/BekStone-FB-Share.jpg'},
      {property: 'og:description', content: META_DESCRIPTION},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      ...PRELOAD_FONT_FILES.map(filename => ({
        rel: 'preload',
        as: 'font',
        type: 'font/woff',
        crossorigin: '',
        href: `/fonts/${filename}`,
      })),
    ],
  },

  loading: false,

  plugins: [
    '~/plugins/deferred',
    '~/plugins/vue-in-view',
    '~/plugins/vue-scrollto',
  ],
};
