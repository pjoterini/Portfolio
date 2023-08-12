const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|mkv|pdf|mp4)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PiotrGórski',
      filename: 'index.html',
      template: 'src/template.html'
    }),
    new HtmlWebpackPlugin({
      title: 'PiotrGórski',
      filename: 'thankyou.html',
      template: 'src/pages/thankyou.html'
    }),
    new HtmlWebpackPlugin({
      title: 'PiotrGórski',
      filename: 'more-about-me.html',
      template: 'src/pages/more-about-me.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  }
}
