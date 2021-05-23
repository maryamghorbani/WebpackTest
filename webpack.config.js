const path = require('path')

module.exports = {
    entry : {
        bundle : './src/script.js'
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader' , 'css-loader']
            }
        ]
    }
}