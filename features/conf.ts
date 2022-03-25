// import{After} from('@cucumber/cucumber')

import { browser } from "protractor";

// var { browser } = require('protractor');
//import "cypress-cucumber-attach-screenshots-to-failed-steps";
exports.config= {
  
  // useAllAngular2AppRoots: true,
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  getPageTimeout: 80000,
    allScriptsTimeout:  5000000,
  //to run in multiple browser at a time
  // multiCapabilities: [
  //   {'browserName': 'chrome',
	// 'chromeOptions': {
  //   'args': ['disable-infobars']
  //  }
  // },
  //   {'browserName': 'firefox',
	// 'moz:firefoxOptions': {
  //   'args': ['--safe-mode']
  // }
	// }
  // ],
  capabilities:{
    browserName : 'chrome',
  },
  //headless compilation
    // 'chromeOptions': {
      // useAutomationExtension: false,
      // args: [ "--headless","--disable-gpu","--window-size=1600x900"],
      

 // }
  onPrepare: async function () {
  await browser.waitForAngularEnabled(false);
  await browser.manage().window().maximize();
 },
specs:
  ['../features/sample.feature'],
  cucumberOpts: {
   format: 'json:sample_report.json',
    tags: "",
    require: [
      '../JSFiles/Stepdefinition.js','../JSFiles/hooks.js',
      '../JSFiles/timeout.js'
    ]
  },
  onComplete: () => {
    var reporter = require('cucumber-html-reporter');
var options = {
        theme: 'bootstrap',
       jsonFile: './JSFiles/sample_report.json',
       output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
       },
     }