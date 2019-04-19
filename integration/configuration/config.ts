import {Config, browser} from "protractor"
import * as reporter from "cucumber-html-reporter"


export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        format:'json:./integration/reports/cucumber_resport.json',
        //tags:["@regressivetest"],
        require: [
            '../scenarios/timeout.js',
            '../scenarios/hookes.js',
            '../scenarios/demo.js'
        ],
    },
    onPrepare : function()
	  {
		  browser.driver.manage().window().maximize();
		  browser.waitForAngularEnabled(false);
	  },
    capabilities: {
			//browserName: 'firefox',
			//browserName: 'internet explorer',  
			browserName: 'chrome',
			chromeOptions: 
			{
        args:["--disable-gpu", 
              "--disable-popup-blocking", 
              "--window-size=1520,820",
              "--headless",
            ]
			  
			}
    },
    onComplete: () =>{
        let options = {
          theme: 'bootstrap',
          jsonFile: './integration/reports/cucumber_resport.json',
          output: './integration/reports/cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          storeScreenshots: true,
          screenshotsDirectory: './integration/reports/',
          metadata: {
            "App Version":"0.0.1",
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
  	jasmineNodeOpts:{
  		showColors: true,
	}
}

