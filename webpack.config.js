const path = require('path')

module.exports = {
    entry : {
        bundle : './src/script.js'
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname,'build'),
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader' , 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'build/images',
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|ttf|eot|woff2|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'build/fonts',
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-madules/,
                loader: "babel-loader"
            }
        ]
    }
}