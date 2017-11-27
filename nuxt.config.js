const LINT_ON_BUILD = false;

const PRELOAD_FONT_FILES = [
  'ywft-ultramagnetic-light.woff',
];

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

      const vueLoader = config.module.rules.find(r => r.loader === 'vue-loader');
      if (vueLoader) {
        vueLoader.options = vueLoader.options || {};
        vueLoader.options.cssModules = {
          localIdentName: '[local]_[hash:base64:5]',
          camelCase: true,
        };
      }
    },
  },

  css: [
    'normalize.css',
    {src: '~/assets/base.styl', lang: 'stylus'},
  ],

  head: {
    title: 'bek.is',
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
};
