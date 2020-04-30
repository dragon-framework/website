const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const GoogleFontsPlugin = require('google-fonts-plugin')

const webpack = require("webpack");
const path = require("path");

let config = {

    /**
     * Config file for webparts
     */
    entry: {

        /* Main website part */
        main: "./assets/config/website.js",

        /* Admin part */
        admin: "./assets/config/admin.js",

        /* Security forms part */
        security: "./assets/config/security.js",

    },

    /**
     * Output files
     */
    output: {

        /* The outpu directory */
        path: path.resolve(__dirname, "public/assets/"),

        /* JS files named by the entry key */
        javascript: "js/[name].js",
        /* JS files named by the entry key and hash */
        // javascript: "js/[name].[chunkhash].js",

        /* CSS files named by the entry key */
        css: "./css/[name].min.css",

        /* Fonts files */
        fonts: "./fonts/[name].[ext]",
        /* Fonts files with Hash */
        // fonts: "./fonts/[name].[hash].[ext]",

        /* Images files */
        images: "images/[name].[ext]",

    },

    /**
     * Plugin Providers
     */
    providers: {

        /* Animate On Scroll */
        AOS: "Aos",
        "window.AOS": "Aos",
        
        /* Feather Icons */
        feather: "feather-icons",
        "window.feather": "feather-icons",

        /* jQuery */
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",

    },

    /** Google fonts */
    googleFonts: [
            {
                "family": "Roboto",
                "variants": [
                    "400",
                    "300",
                    "500",
                    "700"
                ]
            },
            {
                "family": "Montserrat",
                "variants": [
                    "400",
                    "700"
                ]
            },
        ]
};

module.exports = {
    entry: config.entry,
    output: {
        filename: config.output.javascript,
        path: config.output.path
    },
    module: {
        rules: [
        
            /* JavaScript rules */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            
            /* Styles rules */
            {
                test: /\.css|scss|sass$/,
                use: [
                    { 
                        loader: MiniCssExtractPlugin.loader 
                    },
                    { 
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }, 
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {
                                ctx: {
                                    cssnano: {},
                                    autoprefixer: {}
                                }
                            }
                        }
                    },
                    {
                        loader: "resolve-url-loader"
                    },
                    { 
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },

            /* Fonts rule */
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: config.output.fonts,
                }
            },
	
            /* Images rule */
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    // {
                    //     loader: "file-loader",
                    //     options: { 
                    //         limit: 0, // Convert images < 8kb to base64 strings
                    //         // name: config.output.images
                    //     } 
                    // },
                    { 
                        loader: "image-webpack-loader"
                    },
                    {
                        loader: 'url-loader',
                        options: { 
                            // limit: 8000, // Convert images < 8kb to base64 strings
                            limit: 1000000,
                            name: config.output.images
                        } 
                    }
                ],
            },
        ]
    },

    // plugins: Object.assign([
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: config.output.css
        }),
        
        new GoogleFontsPlugin({
            fonts: config.googleFonts,
            
            /* Google Fonts files */
            filename: "../../assets/fonts/google-fonts/[name].css",
            // filename: ".fonts/google-fonts/[name].css",
        }),

        new webpack.ProvidePlugin( config.providers ),

        // new HtmlWebpackPlugin({
        //     inject: false,
        //     hash: true,
        //     title: 'Custom template',
        //     template: "./src/index.html",
        //     filename: "index.html"
        // }),

    ]
    // , config.providers)
}; 
  