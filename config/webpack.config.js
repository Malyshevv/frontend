const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'

function setupDevTool() {
    if (isDev) return 'eval';
    if (isProd) return false;
}


const GLOBAL_CSS_REGEXP = /\.global\.css$/;


module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/client/index.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        publicPath: '/',
        clean: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json','.ts','.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript' ,'@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        publicPath: '/'
                    },
                }],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    // 'less-loader'
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader','css-loader', 'postcss-loader' ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({template: path.resolve(__dirname, '../src/client/index.html')}),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: isDev
    },
    devtool: setupDevTool()
}
