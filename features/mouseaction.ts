// import {browser} from 'protractor'
const {protractor} =require ('protractor');
describe("mouseactions scenario",function(){
    it("mouseactions testcase",function(){
        browser.get("http://demo.automationtesting.in/Register.html");
        browser.waitForAngularEnabled(false);
        var first = element(by.model("FirstName"));
        first.sendKeys("swetha",protractor.Key.ENTER);
        browser.sleep(2000);


    })
})