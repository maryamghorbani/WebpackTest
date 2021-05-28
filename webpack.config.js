const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



const config = {
    entry : {
        bundle : './src/script.js',
        admin : './src/admin.js'
    },
    output : {
        path : path.resolve(__dirname,'build'),
    },
    module : {
        rules : [
            {
                test : /\.(png|jpe?g|gif)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options : {
                            publicPath : 'images',
                            outputPath : 'images',
                            name : '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test : /\.(woff|woff2|ttf|eot|otf)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options : {
                            publicPath : 'fonts',
                            outputPath : 'fonts',
                            name : '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options : {
                    presets : ["@babel/preset-env"]
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'Roocket Index App',
            template : './src/index.html',
            filename: "index.html",
            chunks: ['bundle']
        }),
        new HtmlWebpackPlugin({
            title : 'Roocket Admin App',
            template : './src/index.html',
            filename: "admin.html",
            chunks: ['admin']
        }),
        new CleanWebpackPlugin()
    ]
}




module.exports = (env , { mode }) => {

    let isDevelopment = mode === 'development';

    if (isDevelopment) {
        config.devserver = {
            contentBase : path.resolve(__dirname,'build'),
            index : 'index.html',
            port : 8888
        }
    }

    config.module.rules.push(...[
        {
            test : /\.css$/,
            use : [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader , 'css-loader']
        },
        {
            test : /\.s[ac]ss$/,
            use : [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader , 'css-loader' , 'sass-loader']
        }
    ])

    if (!isDevelopment) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename : '[name].[contenthash].css'
            }),
        )
    }

    return config;
}