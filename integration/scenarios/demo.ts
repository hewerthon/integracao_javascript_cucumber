import { Given, When, Then } from "cucumber";
import { async } from "q";
import { browser, by, ElementFinder, element } from "protractor";
import chai from "chai";
import * as path from 'path';
import { Driver } from "selenium-webdriver/ie";
import { protractor } from "protractor/built/ptor";
import request from 'request';
import DOMParser from 'dom-parser';

let expect = chai.expect;

Given('Eu fiz uma requisição do tipo GET', async function () {
    await browser.get('https://nif.marcosantos.me/?i=5')
    await element(by.id('nif')).getText().then(function(text){
        expect(text).to.equal('test');
    })
    await request('https://nif.marcosantos.me/?i=5', function (error, response, body) {
        const parser = new DOMParser();
        const htmdoc = parser.parseFromString(String(body));
        const nif = htmdoc.getElementById("nif").innerHTML;
        console.log(nif)
        expect(nif).to.equal("teste");
       
    });
});

When('Eu passo os parametro corretos', function () {

});


Then('Eu deve receber o json e fazer as verificações', function () {

});