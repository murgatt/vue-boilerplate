var path            = require('path')
var utils           = require('./utils')
var config          = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir)
{
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry:   {
        app: './src/main.js'
    },
    output:  {
        path:       config.build.assetsRoot,
        filename:   '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
                        ? config.build.assetsPublicPath
                        : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias:      {
            'vue$': 'vue/dist/vue.esm.js',
            '@':    resolve('src')
        }
    },
    module:  {
        rules: [
            {
                test:    /\.vue$/,
                loader:  'vue-loader',
                options: vueLoaderConfig
            },
            {
                test:    /\.js$/,
                loader:  'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test:    /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader:  'url-loader',
                        options: {
                            limit: 10000,
                            name:  utils.assetsPath('img/[name].[hash:7].[ext]')
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            svgo: {
                                enabled: false,
                            },
                            gifsicle: {
                                enabled: false,
                            },
                            mozjpeg: {
                                enabled: true,
                                quality: 70,
                            },
                            optipng: {
                                enabled: true,
                                optimizationLevel: 7,
                                interlaced: false,
                            },
                        }
                    }
                ],

            },
            {
                test:    /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader:  'url-loader',
                options: {
                    limit: 10000,
                    name:  utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test:    /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:  'url-loader',
                options: {
                    limit: 10000,
                    name:  utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}
