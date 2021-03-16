const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.js','.jsx']
    },

    entry: {
        app: ['./client'],
    }, // 입력

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: 
                        [[
                            '@babel/preset-env', {
                            targets: {
                                browser: ['> 5% in KR'],
                            },
                            debig: true,
                        }],
                        '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                },
            }
        ], // 여러개의 규칙
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
};