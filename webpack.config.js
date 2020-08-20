const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    devServer: {
        open: true,
        port: 9000,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'index.html', to: 'index.html' },
                { from: 'src/css/index.css', to: 'index.css' },
            ],
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name(resourcePath) {
                            if (/favicon/.test(resourcePath)) {
                                return '[name].[ext]';
                            } else {
                                return '[name].[hash].[ext]';
                            }
                        },
                        publicPath: 'public',
                        outputPath: 'public',
                    },
                },
            },
        ],
    },
};
