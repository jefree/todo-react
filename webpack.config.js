const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
          './src/js/app.js'
        ]
    },
    output: {
        filename: './dist/[name].js'
    },
    devtool: 'source-map', 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin({filename: './dist/styles.css', allChunks: true})
    ]
}
