const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./base.confog')

const ROOT_PATH = resolve(__dirname)
const SRC_PATH = resolve(ROOT_PATH, config.srcPath)
const DIST_PATH = resolve(ROOT_PATH, config.buildPath)
const LIBS_PATH = resolve(ROOT_PATH, config.libsPath)
const TEM_PATH = resolve(LIBS_PATH, config.templatePath)

module.exports = {
    devtool: 'source-map',
    entry: {
        index: resolve(SRC_PATH, 'index.jsx'),
        vendors: config.vendors
    },
    output: {
        path: DIST_PATH,
        filename: 'js/[name]-[hash:8].js',
        chunkFilename: 'js/[name]-[chunkhash:8].js',
        publicPath: './'
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer()]
                            }
                        },
                        'sass-loader'
                    ]
                })
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|svgz)?$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name]-[hash:8].[ext]?'
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
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false,
                    drop_console: false
                },
                output: {
                    // 最紧凑的输出
                    beautify: false,
                    // 删除所有的注释
                    comments: false
                }
            }
        }),
        new CleanWebpackPlugin([DIST_PATH], {
            root: '',
            verbose: true,
            dry: false
        }),
        new webpack.ProvidePlugin({
            $: 'zepto',
            zepto: 'zepto',
            'window.zepto': 'zepto'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'BABEL_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name]-[contenthash:8].css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            filename: 'js/[name]-[hash:8].js',
            names: ['vendors']
        }),
        new HtmlWebpackPlugin({
            title: config.html.title,
            keywords: config.html.keywords,
            description: config.html.description,
            filepath: DIST_PATH,
            template: resolve(TEM_PATH, 'index.html'),
            chunks: ['index', 'vendors'],
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }])
    ]
}
