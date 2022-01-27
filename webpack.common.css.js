const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader'
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             config: path.resolve('./postcss.config.js'),
                    //         },
                    //     }
                    // },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./node_modules']
                            }
                        }
                    }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ]
}