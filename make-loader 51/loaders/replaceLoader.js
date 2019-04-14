const loaderUtils = require('loader-utils');

module.exports = function(source) { //不能用箭头函数，防止this错乱
	return source.replace('lee', 'world');
}