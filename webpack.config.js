const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    library: ['simpleMessageReader'],
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: ['node_modules'],
        options: {
          presets: ['env']
        }
      }
    ]
  }
}
