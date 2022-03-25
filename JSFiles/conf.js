"use strict";
// import{After} from('@cucumber/cucumber')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// var { browser } = require('protractor');
//import "cypress-cucumber-attach-screenshots-to-failed-steps";
exports.config = {
    // useAllAngular2AppRoots: true,
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    getPageTimeout: 80000,
    allScriptsTimeout: 5000000,
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
    capabilities: {
        browserName: 'chrome',
    },
    //headless compilation
    // 'chromeOptions': {
    // useAutomationExtension: false,
    // args: [ "--headless","--disable-gpu","--window-size=1600x900"],
    // }
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield protractor_1.browser.manage().window().maximize();
        });
    },
    specs: ['../features/sample.feature'],
    cucumberOpts: {
        format: 'json:sample_report.json',
        tags: "",
        require: [
            '../JSFiles/Stepdefinition.js', '../JSFiles/hooks.js',
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
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2ZlYXR1cmVzL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEyQzs7Ozs7Ozs7Ozs7QUFFM0MsMkNBQXFDO0FBRXJDLDJDQUEyQztBQUMzQywrREFBK0Q7QUFDL0QsT0FBTyxDQUFDLE1BQU0sR0FBRTtJQUVkLGdDQUFnQztJQUNoQyxhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxjQUFjLEVBQUUsS0FBSztJQUNuQixpQkFBaUIsRUFBRyxPQUFPO0lBQzdCLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsOEJBQThCO0lBQy9CLHFCQUFxQjtJQUNwQixpQ0FBaUM7SUFDakMsS0FBSztJQUNMLEtBQUs7SUFDTCwrQkFBK0I7SUFDaEMsMEJBQTBCO0lBQ3pCLDRCQUE0QjtJQUM1QixJQUFJO0lBQ0wsSUFBSTtJQUNILEtBQUs7SUFDTCxZQUFZLEVBQUM7UUFDWCxXQUFXLEVBQUcsUUFBUTtLQUN2QjtJQUNELHNCQUFzQjtJQUNwQixxQkFBcUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGtFQUFrRTtJQUd2RSxJQUFJO0lBQ0gsU0FBUyxFQUFFOztZQUNYLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsQ0FBQztLQUFBO0lBQ0YsS0FBSyxFQUNILENBQUMsNEJBQTRCLENBQUM7SUFDOUIsWUFBWSxFQUFFO1FBQ2IsTUFBTSxFQUFFLHlCQUF5QjtRQUNoQyxJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNQLDhCQUE4QixFQUFDLHFCQUFxQjtZQUNwRCx1QkFBdUI7U0FDeEI7S0FDRjtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNyRCxJQUFJLE9BQU8sR0FBRztZQUNOLEtBQUssRUFBRSxXQUFXO1lBQ25CLFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsTUFBTSxFQUFFLHdCQUF3QjtZQUMvQixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUNGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGLENBQUEifQ==