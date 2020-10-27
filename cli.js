const { program } = require('commander')
const webpack = require('webpack')
const path = require('path')

program
	.option('-c, --config <path>', 'config file')

program.parse(process.argv)

const config = require(path.join(process.cwd(), program.config))

webpack({
	mode: 'production',
	optimization: {
		minimize: false,
	},
	entry: {
		index: config.entry,
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
		extensions: ['.js', '.ts'],
		alias:{
			titan: path.join(__dirname, 'dist', 'index.js')
		}
	},
	target: 'web',
	output: {
		filename: 'index.js',
		path: config.dist,
		libraryTarget: 'umd'
	},
}, (err, stats) => { 
	if (err || stats.hasErrors()) {
		console.log(err)
	}
	console.log("built")
});

