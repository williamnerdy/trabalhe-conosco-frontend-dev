module.exports = {
  "collectCoverageFrom": [
    "src/**/*.jsx"
  ],
  "coverageReporters": [
    "text",
    "html"
  ],
  "setupFiles": [
    "<rootDir>/config/polyfills.js"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/config/setupTests.js",
  "testMatch": [
    "<rootDir>/tests/**/*.spec.js"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web"
  },
  "unmockedModulePathPatterns": [
    "node_modules/react/",
    "node_modules/enzyme/"
  ],
  "moduleFileExtensions": [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node",
    "mjs"
  ]
}
