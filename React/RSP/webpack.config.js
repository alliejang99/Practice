const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'responseChack-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },

    entry: {
        index: ['./client'],
    }, // 입력

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-refresh/babel',
                        'react-hot-loader/babel'
                    ],
                },
            }
        ], // 규칙
    },

    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
    }, // 출력

    devServer: {
        publicPath: '/dist/',
        hot: true,
    }
};