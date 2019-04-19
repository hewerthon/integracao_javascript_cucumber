"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        format: 'json:./integration/reports/cucumber_resport.json',
        //tags:["@regressivetest"],
        require: [
            '../scenarios/timeout.js',
            '../scenarios/hookes.js',
            '../scenarios/demo.js'
        ],
    },
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.waitForAngularEnabled(false);
    },
    capabilities: {
        //browserName: 'firefox',
        //browserName: 'internet explorer',  
        browserName: 'chrome',
        chromeOptions: {
            args: ["--disable-gpu",
                "--disable-popup-blocking",
                "--window-size=1520,820",
                "--headless",
            ]
        }
    },
    onComplete: () => {
        let options = {
            theme: 'bootstrap',
            jsonFile: './integration/reports/cucumber_resport.json',
            output: './integration/reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            storeScreenshots: true,
            screenshotsDirectory: './integration/reports/',
            metadata: {
                "App Version": "0.0.1",
                "Test Environment": "STAGING",
                "Browser": "Chrome  62.0.0000.00",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
    suites: {
        Smokesuite: ['smok_test.ts'],
        Regressionsuite: ['regressive_test.js']
    },
    jasmineNodeOpts: {
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUMxQyxpRUFBa0Q7QUFHdkMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFDLGtEQUFrRDtRQUN6RCwyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ0wseUJBQXlCO1lBQ3pCLHdCQUF3QjtZQUN4QixzQkFBc0I7U0FDekI7S0FDSjtJQUNELFNBQVMsRUFBRztRQUVaLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNBLFlBQVksRUFBRTtRQUNmLHlCQUF5QjtRQUN6QixxQ0FBcUM7UUFDckMsV0FBVyxFQUFFLFFBQVE7UUFDckIsYUFBYSxFQUNiO1lBQ0ssSUFBSSxFQUFDLENBQUMsZUFBZTtnQkFDZiwwQkFBMEI7Z0JBQzFCLHdCQUF3QjtnQkFDeEIsWUFBWTthQUNiO1NBRVQ7S0FDQztJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDYixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSw2Q0FBNkM7WUFDdkQsTUFBTSxFQUFFLDRDQUE0QztZQUNwRCxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsb0JBQW9CLEVBQUUsd0JBQXdCO1lBQzlDLFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUNyQjtTQUNGLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRixNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDNUIsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDdkM7SUFDRCxlQUFlLEVBQUM7UUFDZixVQUFVLEVBQUUsSUFBSTtLQUNsQjtDQUNELENBQUEifQ==