const path = require('path');

module.exports = {
    testRegex: 'app/__test__/.*.spec.js$',

    moduleNameMapper: {
        "^app(.*)$": "<rootDir>/app$1",
        "\\.(scss|png|gif|png)": "<rootDir>/app/__mocks__/styleMock.js"
    },
    setupFilesAfterEnv: [
        "<rootDir>/app/__test__/setupTest.js"
    ],
    transformIgnorePatterns: ['<rootDir>/app/node_modules/']
}
