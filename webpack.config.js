// Entry, output, loaders, mode
var path = require('path');


module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client/src/index.jsx'),
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: 'babel-loader'
      },
      {
        test: /.css$/i,
        exclude: path.join(__dirname, 'node_modules'),
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      }
    ]
  }
}