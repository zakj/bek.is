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
      });
    },
  },

  css: [
    'normalize.css',
    {src: '~/assets/base.styl', lang: 'stylus'},
  ],

  head: {
    title: 'Bek Stone',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
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
    '~/plugins/vue-in-view',
    '~/plugins/vue-scrollto',
  ],
};
