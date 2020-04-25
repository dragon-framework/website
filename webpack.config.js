const webpack = require("webpack");
const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
// Extract CSS
const extractCSS = new ExtractTextPlugin('./css/[name].min.css');


// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractSass = new ExtractTextPlugin({
//     filename: "[name].css",
//     disable: process.env.NODE_ENV === "development"
// });

let config = {
    entry: {
        app: "./assets/js/app.js",
        admin: "./assets/js/admin.js",
        security: "./assets/js/security.js",
    },
    output: {
        filename: "./js/[name].js",
        path: path.resolve(__dirname, "./public/assets/")
    },
    module: {
        rules: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: "babel-loader"
        // }, 
        // {
            test: /\.(css|scss)$/,
            // loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']

            use: extractCSS.extract([
                'css-loader',
                'sass-loader',
                'postcss-loader'
            ])
        }]
    },

    plugins: [
        extractCSS
    ]
}
  
 
  
module.exports = config;