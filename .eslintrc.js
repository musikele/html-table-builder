module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		'jest/globals': true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		indent: ['error', 2],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	},
	plugins: ['jest']
};
