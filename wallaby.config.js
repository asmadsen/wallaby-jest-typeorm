module.exports = function (wallaby) {
	var path = require('path')

	process.env.NODE_PATH +=
		path.delimiter + path.join(wallaby.projectCacheDir, 'src')

	return {
		files: [
			'tsconfig.json',
			'tests/tsconfig.json',
			'src/**/*.ts'
		],

		tests: ['tests/**/*.spec.ts'],

		env: {
			type: 'node',
			runner: 'node'
		},

		testFramework: 'jest',
	}
}
