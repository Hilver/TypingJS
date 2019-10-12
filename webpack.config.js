const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/typed.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'typed.min.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['@babel/preset-env']
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
		})
	]
}