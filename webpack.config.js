const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './example/example.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'example',
            template: './example/example.html',
        }),
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './example/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                }],
            },
            {
                test: /\.(woff|ttf|eot|svg|jpg|png)\??.*$/,
                loader: 'url-loader',
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react',"es2015"],
                    },
                },
            },
        ],
    },
};
