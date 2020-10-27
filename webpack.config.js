const path = require('path')

module.exports = {
	mode: 'production',
	optimization: {
		minimize: false,
	},
	entry: {
		index: './src/main.js',
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
						"@babel/plugin-proposal-export-default-from"
					]
				},
				exclude: path.resolve(__dirname, './node_modules'),
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	target: 'node',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd'
	},
}