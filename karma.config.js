const path = require('path')
const isTravis = require('is-travis')

process.env.CHROME_BIN = require('puppeteer').executablePath()
const settings = isTravis ? {
  browsers: ['Chrome_without_security'],
  customLaunchers: {
    Chrome_without_security: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox']
    }
  }
} : {
  browsers: ['Chrome'],
  customLaunchers: {}
}

// Karma configuration
// Generated on Sun Feb 25 2018 21:14:55 GMT+0530 (IST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['japa'],

    // list of files / patterns to load in the browser
    files: [
      'index.js',
      'test/*.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'index.js': ['webpack'],
      'test/*.spec.js': ['webpack']
    },

    webpack: {
      output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
        library: ['simpleMessageReader'],
        libraryTarget: 'umd'
      },
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: ['node_modules'],
            options: {
              presets: ['env']
            }
          }
        ]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: settings.browsers,

    customLaunchers: settings.customLaunchers,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
