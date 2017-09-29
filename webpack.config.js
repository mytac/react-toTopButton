const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
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
