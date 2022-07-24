const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    "nook-inc.theme": "./src/styles/nook-inc.theme.scss"
  },
});