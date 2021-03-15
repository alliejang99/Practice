const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 배포: production
    devtool: 'eval',
    resolve: {
        extension: ['.js','.jsx']
    },

    entry: {
        app: ['./client'],
    }, // 입력
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력
};