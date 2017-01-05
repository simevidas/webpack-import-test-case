import webpack from 'webpack';

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        publicPath: '/',
        filename: 'bundle.js'
    }
}