const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const autoprefixer = require('autoprefixer')
const config = require('./base.confog')

const ROOT_PATH = resolve(__dirname)
const SRC_PATH = resolve(ROOT_PATH, config.srcPath)
const DIST_PATH = resolve(ROOT_PATH, config.buildPath)
const LIBS_PATH = resolve(ROOT_PATH, config.libsPath)
const TEM_PATH = resolve(LIBS_PATH, config.templatePath)

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: config.devVendors.concat(resolve(SRC_PATH, 'index.jsx'))
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: SRC_PATH,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            }, {
                test: /\.(css|scss)?$/,
                include: ROOT_PATH,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer()]
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|svgz)?$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    externals: {
        zepto: '$'
    },
    plugins: [
        new StyleLintPlugin(),
        new webpack.ProvidePlugin({
            $: 'zepto',
            zepto: 'zepto',
            'window.zepto': 'zepto'
        }),
        new HtmlWebpackPlugin({
            title: config.html.title,
            filepath: DIST_PATH,
            template: resolve(TEM_PATH, 'index.html'),
            chunks: ['index'],
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        historyApiFallback: true,
        contentBase: ROOT_PATH,
        host: config.host,
        port: config.port,
        proxy: config.proxy
    }
}
