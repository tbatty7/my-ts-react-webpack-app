const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@skribe/web/core': path.resolve(__dirname, 'src/core'),
            '@skribe/web/components': path.resolve(__dirname, './src/app/components'),
            '@skribe/web/tracking': path.resolve(
                __dirname,
                './src/edge/tracking/unified',
            ),
            '@skribe/web/auth': path.resolve(__dirname, './src/edge/auth/frontegg'),
            '@skribe/web/storage': path.resolve(__dirname, './src/edge/storage/S3'),
            '@skribe/web/api': path.resolve(__dirname, './src/edge/api/Amplify'),
            '@skribe/web/date': path.resolve(__dirname, './src/edge/date/dayjs'),
            '@skribe/web/search': path.resolve(__dirname, './src/edge/search/Fuse'),
            '@skribe/web/recorder': path.resolve(
                __dirname,
                './src/edge/recorder/speakai',
            ),
            '@skribe/web': path.resolve(__dirname, './src/edge/web'),
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /.s[ac]ss$/i,
                use: [
                    // Creates <code>style</code> nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
