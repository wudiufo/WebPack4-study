const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	externals: 'lodash',//解决自己的库里引了lodash，用户又引了lodash的问题,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'library.js',
		library: 'root',//支持通过script标签引入，在全局变量增加一个root变量
		libraryTarget: 'umd' //别人用的时候，通过任何形式引入库都可以，比如AMD，CMD，ES MODULE，Commonjs
	
		// library: 'root',//打包生成全局变量root
		// libraryTarget: 'this' //把全局变量root挂载到this上，可以填umd，this，window,global

        // externals: {
        // 	lodash:{
        // 		root：'_', //是用script标签引入进来的，必须在全局注入一个 _ 变量，下面的library才能正常执行
        // 		commonjs:'lodash',//在用commonjs规范引入是，名字必须是lodash
        // 	}

        // }
	}
}