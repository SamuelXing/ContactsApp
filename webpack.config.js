const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    watch: true,
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 500,
		poll: 1500
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/ 
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map', // development debug
    devServer: {
        port: 8888,
        contentBase: path.join(__dirname, 'public'),
    }

};