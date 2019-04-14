const path = require('path');

module.exports = {
	devServer: {
		contentBase: [path.resolve(__dirname, 'static')],
	}
}