const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	resolveLoader: { //先在 node_modules 中找用到的loader，如果没找到，再在loaders里查找
		modules: ['node_modules', './loaders']
	},
	module: {
		rules: [{
			test: /\.js/,
			use: [//使用自己写的replaceLoader
				{
					loader: 'replaceLoader',
				},
				{
					loader: 'replaceLoaderAsync',
					options: {
						name: 'lee'
					}
				},
			]
		}]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	}
}