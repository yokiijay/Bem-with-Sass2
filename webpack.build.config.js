const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpg|png|gif|svg|webp)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images'
          }
        }]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    overlay: true,
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new ExtractWebpackPlugin({
      filename: 'style.min.css'
    })
  ]
}
