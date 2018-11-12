// webpack.config.js
module.exports = {
  entry: './index.js',
  target: 'web',
  output: {
    filename: 'html-table-builder.js',
    library: 'HtmlTableBuilder',
    libraryTarget: 'umd'
  },
  mode: 'production',
  devtool: 'source-map'
};
