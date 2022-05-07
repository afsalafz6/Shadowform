const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src', 'index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../node_modules'),
        use: ['style-loader', 'css-loader', 'saas-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/Roboto'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', ' '],
    alias: {
      '@components': path.resolve(__dirname, '../src/components/'),
      '@atoms': path.resolve(__dirname, '../src/components/atoms'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules'),
      '@organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@pages': path.resolve(__dirname, '../src/components/pages'),
      '@pwd': '.',
      '@assets': path.resolve(__dirname, '../src/assets/'),
      '@styles': path.resolve(__dirname, '../src/assets/styles/')
    }
  }
};
