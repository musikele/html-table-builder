// webpack.config.js
module.exports = {
  entry: './index.js',
  target: 'web',
  output: {
    filename: 'object-to-html-table.js',
    library: 'SuperTable',
    libraryTarget: 'umd'
  },
  mode: 'production',
  devtool: 'source-map'
};
