const path = require('path');
// ...
module.exports = {
    entry: 'app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'app.bundle.js'
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'app')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}