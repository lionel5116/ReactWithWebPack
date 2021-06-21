const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use :{
                    loader: 'babel-loader',
                }
            },
            { test: /\.css$/, use: 'css-loader' },
        ]
    },
    devServer: {
        // This is where webpack-dev-server serves your bundle
        // which is created in memory.  In this example it will be:
        //   http://localhost/assets/bundle.js
        publicPath: '/assets/',
      },

}