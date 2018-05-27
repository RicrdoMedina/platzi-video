const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/styles.css")
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname}),
    )
  }

  return {

    entry: {
      'home': path.resolve(__dirname, 'src/entries/home.js'),
      'redux': path.resolve(__dirname, 'src/entries/redux.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: './dist',
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
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
          test:/\.css$/,
          //Indicamos los loaders que se van a extraer
          use: ExtractTextPlugin.extract({
            use:[
              // Agregar configuraciones para css
              // Para hacerlos compatible con postcss
              // Mudules: Permita importar modulos
              // importLoaders: 1 le decimos que trabaje con un solo loaders en este caso postcss-loader
              {
                loader:'css-loader',
                options: {
                  minimize: true
                }
              },
              'postcss-loader'
            ]
          }),
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}