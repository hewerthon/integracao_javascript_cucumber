import Config from 'protractor';
import browser from 'protractor';


export const config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../../features/demo_outline.feature'],
    cucumberOpts: {
        format:'json:./cucumber_resport.json',
        //tags:["@regressivetest"],
        require: [
            '../scenarios/timeout.js', '../scenarios/demo_outline.js'
        ]
    },
    capabilities: {
			//browserName: 'firefox',
			//browserName: 'internet explorer',  
			browserName: 'chrome',
			chromeOptions: 
			{
				args:["--disable-gpu", "--disable-popup-blocking", "--window-size=1520,820"]
			    //"--headless",
			}
    },
    onComplete: () =>{
        let options = {
          theme: 'bootstrap',
          jsonFile: './reports/cucumber_resport.json',
          output: './reports/cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
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

