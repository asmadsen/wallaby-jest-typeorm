const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/tests/tsconfig.json'
		}
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	testMatch: ['<rootDir>/tests/**/*.spec.(js|jsx|ts|tsx)'],
	transform: {
		...tsjPreset.transform
	}
}
