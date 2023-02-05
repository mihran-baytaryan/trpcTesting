// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: 'index.html',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: ['ts-loader'],
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js', '.jsx'],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/client/index.html',
//       filename: './index.html',
//     }),
//     new CopyPlugin({
//       patterns: [{ from: './src/client/style.css' }],
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, './dist'),
//     },
//     proxy: {
//       '/api': 'http://localhost:3000',
//       secure: false
//     }
//   },

// }