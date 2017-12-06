import * as webpack from 'webpack'
import * as path from 'path'

const config: webpack.Configuration = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}

export default config
