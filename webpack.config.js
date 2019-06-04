const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: path.join(__dirname, 'src/index.jsx'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },

    devServer: {
        publicPath: '/',
        contentBase: './dist',
        port: 3000,
        headers: { "Cache-Control": "max-age=600" },
        historyApiFallback: true
    }
}