const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'example.js'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                loader: "raw-loader"
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: "./index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        hot: true,
        overlay: true,
        open: true
    },
    mode: 'production'
};
