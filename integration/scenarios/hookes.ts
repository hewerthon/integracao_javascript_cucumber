import { After, Before, Status } from 'cucumber'
import { browser } from 'protractor'
import * as reporter from "cucumber-html-reporter"
import StepResult  from 'cucumber'
import { defineSupportCode } from 'cucumber'
import { async } from 'q';


Before(function () {
    // This hook will be executed before all scenarios
  });

Before({tags: "@regressivetest"}, function () {
    // This hook will be executed before scenarios tagged with @foo
});

Before({tags: "@smoketest"}, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});

After(async function (scenario) {
    // This hook will be executed before scenarios tagged with @foo
   
    if(scenario.result.status=== Status.FAILED)
    {
        // code to take screenshot
        const screenshot = await browser.takeScreenshot();
            this.attach(screenshot, "image/png")
    };
});
