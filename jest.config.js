module.exports = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: "src",
	testRegex: ".*\\.spec\\.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	collectCoverageFrom: ["checks/**/*.ts"],
	coverageDirectory: "../coverage",
	testEnvironment: "node",
	moduleDirectories: ["node_modules", "src"],
	clearMocks: true,
	coverageThreshold: {
		global: {
			branches: 97.6,
			functions: 97.6,
			lines: 97.6,
			statements: 97.6,
		},
	},
};
