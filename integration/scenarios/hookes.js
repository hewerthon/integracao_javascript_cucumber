"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    // This hook will be executed before all scenarios
});
cucumber_1.Before({ tags: "@regressivetest" }, function () {
    // This hook will be executed before scenarios tagged with @foo
});
cucumber_1.Before({ tags: "@smoketest" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            // code to take screenshot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
        ;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9va2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBZ0Q7QUFDaEQsMkNBQW9DO0FBT3BDLGlCQUFNLENBQUM7SUFDSCxrREFBa0Q7QUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFFTCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUU7SUFDOUIsK0RBQStEO0FBQ25FLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsRUFBRTtJQUN6Qix3RUFBd0U7QUFDNUUsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzFCLCtEQUErRDtRQUUvRCxJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFJLGlCQUFNLENBQUMsTUFBTSxFQUMxQztZQUNJLDBCQUEwQjtZQUMxQixNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7U0FDM0M7UUFBQSxDQUFDO0lBQ04sQ0FBQztDQUFBLENBQUMsQ0FBQyJ9