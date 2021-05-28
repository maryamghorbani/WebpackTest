const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : {
        bundle : './src/script.js',
        admin : './src/admin.js'
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname,'build'),
    },
    mode : "development",
    devServer : {
        contentBase : path.resolve(__dirname,'build'),
        index : 'index.html',
        port : 8888
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader']
            },
            {
                test : /\.s[ac]ss$/,
                use : ['style-loader', 'css-loader' , 'sass-loader']
            },
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