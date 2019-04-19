import { protractor, ElementFinder, element, by } from 'protractor'


function Demo(){

    this.url = element(by.xpath(""));
};

module.exports = new Demo();
