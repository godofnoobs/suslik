const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        entry: './src/index.js',
    },
    output: {
        filename: './bundles/build.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/index.html',
                to: 'index.html',
            },
            {
                from: './src/main.css',
                to: './styles/main.css',
            },
        ]),
    ],
};
