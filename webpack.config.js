const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require("webpack");

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
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
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    // resolve: {
    //     alias: {
    //         'three/OrbitControls': path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js'),
    //     }
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.ProvidePlugin({
        //     'THREE': 'three'
        // }),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: "./index.html",
            filename: "index.html"
        }),
        new CopyWebpackPlugin([ { from: './assets', to: 'assets' } ])
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
