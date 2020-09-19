const path = require('path')

module.exports = {
	mode: 'development',
	optimization: {
		minimize: false,
	},
	entry: {
		index: './demo/index.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options:{
					plugins: [
						["babel-plugin-transform-react-jsx", {
							pragma: "gjs",
						}],
					]
				},
				exclude: path.resolve(__dirname, './node_modules'),
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
	target: 'web',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd'
	},
}