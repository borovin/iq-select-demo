module.exports = {
    context: __dirname + "/src",
    entry: "./index",
    output: {
        path: __dirname + "/build",
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    devtool: "#inline-source-map"
};