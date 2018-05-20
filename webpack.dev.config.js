const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'home': path.resolve(__dirname, 'src/entries/home.js'),
    'redux': path.resolve(__dirname, 'src/entries/redux.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 9000,
    hot: true, // Para usar el HotModuleReplacement agregar el src que apunte al server <script src="http://localhost:8080/js/bundle.js"></script>
    open: true
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader','postcss-loader'] // Style loader agregara el css en el head
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
    ]
  },
  plugins: [
    //Activar HotModuleReplacement
    new webpack.HotModuleReplacementPlugin()
  ]
}