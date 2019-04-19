"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const request_1 = __importDefault(require("request"));
const dom_parser_1 = __importDefault(require("dom-parser"));
let expect = chai_1.default.expect;
cucumber_1.Given('Eu fiz uma requisição do tipo GET', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://nif.marcosantos.me/?i=5');
        yield protractor_1.element(protractor_1.by.id('nif')).getText().then(function (text) {
            expect(text).to.equal('test');
        });
        yield request_1.default('https://nif.marcosantos.me/?i=5', function (error, response, body) {
            const parser = new dom_parser_1.default();
            const htmdoc = parser.parseFromString(String(body));
            const nif = htmdoc.getElementById("nif").innerHTML;
            console.log(nif);
            expect(nif).to.equal("teste");
        });
    });
});
cucumber_1.When('Eu passo os parametro corretos', function () {
});
cucumber_1.Then('Eu deve receber o json e fazer as verificações', function () {
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUU3QywyQ0FBaUU7QUFDakUsZ0RBQXdCO0FBSXhCLHNEQUE4QjtBQUM5Qiw0REFBbUM7QUFFbkMsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixnQkFBSyxDQUFDLG1DQUFtQyxFQUFFOztRQUN2QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFDcEQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxpQkFBTyxDQUFDLGlDQUFpQyxFQUFFLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO1lBQzVFLE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQVMsRUFBRSxDQUFDO1lBQy9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0NBQWdDLEVBQUU7QUFFdkMsQ0FBQyxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsZ0RBQWdELEVBQUU7QUFFdkQsQ0FBQyxDQUFDLENBQUMifQ==