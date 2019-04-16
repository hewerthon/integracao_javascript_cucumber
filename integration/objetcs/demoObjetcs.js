import { protractor, ElementFinder, element } from "protractor";


function Demo(){

    this.url = element(by.xpath(""));
};

module.exports = new Demo();
