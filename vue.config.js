// eslint-disable-next-line no-undef
const path = require('path');

export const pluginOptions = {
  windicss: {
    // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
  },
};
export const configureWebpack = {
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      src: path(__dirname, 'src'),
    },
  },
};
