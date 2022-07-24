const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    "nook-inc": "./src/styles/nook-inc.theme.scss",
    "nook-inc.theme": "./src/import.scss"
  },
});