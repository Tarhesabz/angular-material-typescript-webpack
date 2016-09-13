var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'),
    devServer;

devServer = {
    /*
    colors: true,
    quiet: false,
    noInfo: false,
    contentBase: './src/',
    publicPath: '/src/',
    filename: "bundle.js",
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8080,
    hot: true,
    inline: true,
    stats: {
        colors: true
    }
    */
};

module.exports = {
    entry: [//'webpack-dev-server/client?http://localhost:8080',
            //'webpack/hot/dev-server',
            //'webpack-hot-middleware/client',
            './src/index.ts'
            //'./src/index.html'
            ],
    output: {
        path: 'dist',
        publicPath: "http://localhost:8080/",

        filename: "bundle.js"
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),


        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,

            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:8080/',
            online: false,
            notify: false
        },
        {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
        }
        )


    ],
    module:{
        loaders: loaders
    }


};
