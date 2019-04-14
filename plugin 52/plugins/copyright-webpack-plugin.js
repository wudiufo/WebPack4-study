class CopyrightWebpackPlugin {

	apply(compiler) {
// 同步
		compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log('compiler');
		})
// 异步
		compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
			debugger;
			compilation.assets['copyright.txt']= {
				source: function() {
					return 'copyright by hello'
				},
				size: function() {
					return 18;
				}
			};
			cb();
		})
	}

}

module.exports = CopyrightWebpackPlugin;