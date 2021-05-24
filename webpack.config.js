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
                test: /\.(png|jpe?g|gif)/,
                use: ['file-loader']
            }
        ]
    }
}