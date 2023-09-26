const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {   
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: { 
              presets: ["@babel/env", "@babel/preset-react", "@babel/preset-typescript"]
            }
        },
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   resolve: {
      //     extensions: ['.ts', '.tsx', '.js', '.json'],
      //   },
      //   use: 'ts-loader',
      // },
      {
				test: /\.s(a|c)ss?$/,
				use: [ MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader' ],
			},
      {
				test: /\.(png|jpe?g|svg)$/,
				use: [
					{
					    loader: 'file-loader',
					    options: {
							name: '[name].[ext]',
							outputPath: 'images/'
						}
					}
				]
			}
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      
    }
  }
}
