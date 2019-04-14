const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

// 分析入口文件
const moduleAnalyser = (filename) => {
	// 读文件里的内容
	const content = fs.readFileSync(filename, 'utf-8');
	// 抽象语法树
	const ast = parser.parse(content, {
		sourceType: 'module'
	});
	const dependencies = {};
	traverse(ast, {
		ImportDeclaration({ node }) {
			const dirname = path.dirname(filename);
			const newFile = './' + path.join(dirname, node.source.value);
			dependencies[node.source.value] = newFile;
		}
	});
	// 转换成可在浏览器上运行的代码
	const { code } = babel.transformFromAst(ast, null, {
		presets: ["@babel/preset-env"]
	});
	return {
		filename,
		dependencies,
		code
	}
}

const moduleInfo = moduleAnalyser('./src/index.js');
console.log(moduleInfo);
